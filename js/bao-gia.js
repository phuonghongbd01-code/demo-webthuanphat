// js/bao-gia.js
// Trang KHÁCH: Chỉ hiển thị PDF do admin cấu hình - KHÔNG có chức năng upload/kéo thả

document.addEventListener('DOMContentLoaded', function () {

    // Hàm sinh HTML tự động cho lưới 9 ô (Dự án 3x3)
    function renderGrid(containerId, prefix) {
        let container = document.getElementById(containerId);
        if (!container) return;

        let content = '';
        for (let i = 1; i <= 9; i++) {
            content += `
                <div class="grid-item">
                    <img src="images/project_${i % 2 + 1}.png" alt="Dự án ${i}">
                    <div class="grid-item-content">
                        <h4>Dự án ${prefix} ${i}</h4>
                        <p>Khách hàng: Anh A <br> Diện tích: 100m2</p>
                    </div>
                </div>
            `;
        }
        container.innerHTML = content;
    }

    // Hàm mở file PDF (Mô phỏng nhảy trang - dùng cho trang thi công)
    window.openPDF = function (pdfName) {
        alert("Hệ thống sẽ chuyển hướng hoặc mở popup hiển thị file báo giá: " + pdfName);
    }

    // Logic xử lý form mục Tra giá theo nhu cầu
    window.toggleForm = function () {
        let type = document.getElementById('service-type').value;
        document.getElementById('form-thiet-ke').style.display = (type === 'thiet-ke') ? 'block' : 'none';
        document.getElementById('form-thi-cong').style.display = (type === 'thi-cong') ? 'block' : 'none';
        const resultBox = document.getElementById('result-tk');
        if (resultBox) {
            resultBox.style.display = 'none';
        }
    }

    // Tính toán tiền thiết kế
    window.calculatePrice = function () {
        let areaInput = document.getElementById('area');
        let styleSelect = document.getElementById('style');
        if (!areaInput || !styleSelect) return;

        let area = areaInput.value;
        let pricePerM2 = styleSelect.value;

        if (!area || area <= 0) {
            alert("Vui lòng nhập diện tích hợp lệ!");
            return;
        }

        let total = area * pricePerM2;
        let formattedTotal = total.toLocaleString('vi-VN') + " VNĐ";

        let resultBox = document.getElementById('result-tk');
        if (resultBox) {
            resultBox.style.display = 'block';
            resultBox.innerHTML = `Chi phí thiết kế dự kiến của bạn là: <span style="color:#d32f2f; font-size:20px;">${formattedTotal}</span>`;
        }
    }

    // Nhảy sang PDF gói thi công
    window.openPackagePDF = function () {
        let packageSelect = document.getElementById('package-type');
        if (packageSelect) {
            let selectedPDF = packageSelect.value;
            openPDF(selectedPDF);
        }
    }

    // Render grids
    renderGrid('tk-projects', 'Thiết kế');
    renderGrid('tc-projects', 'Thi công');

    // ========================================================
    // ==== PDF VIEWER - CHỈ ĐỌC (KHÁCH HÀNG) ====
    // ========================================================

    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfLoading = document.getElementById('pdf-loading');
    const pdfEmpty = document.getElementById('pdf-empty');

    // Nếu trang không có PDF viewer thì bỏ qua
    if (!pdfViewer) return;

    // Check pdfjsLib
    if (typeof pdfjsLib === 'undefined') {
        console.error("PDF.js chưa được tải.");
        return;
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

    // ---- LẤY CẤU HÌNH PDF TỪ ADMIN (lưu trong localStorage) ----
    // Admin lưu: { type: 'url', value: 'path/to/file.pdf' }
    //         hoặc { type: 'data', value: ArrayBuffer (base64) }
    const adminConfig = getPDFConfig();

    if (!adminConfig) {
        // Không có config: admin chưa cài đặt PDF
        if (pdfEmpty) pdfEmpty.style.display = 'flex';
        return;
    }

    // Có config -> load PDF
    loadPDFFromConfig(adminConfig);

    // ---- HÀM LẤY CONFIG CỦA ADMIN ----
    function getPDFConfig() {
        try {
            const raw = localStorage.getItem('thuanphat_baogia_thietke_config');
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (e) {
            return null;
        }
    }

    // ---- HÀM LOAD PDF THEO CONFIG ----
    async function loadPDFFromConfig(config) {
        if (pdfLoading) pdfLoading.style.display = 'block';
        pdfViewer.style.display = 'none';
        if (pdfEmpty) pdfEmpty.style.display = 'none';

        try {
            let pdfData;

            if (config.type === 'url') {
                // Load từ URL/đường dẫn file
                pdfData = { url: config.value };
            } else if (config.type === 'data') {
                // Load từ dữ liệu binary đã lưu (IndexedDB)
                const arrayBuffer = await loadFromIndexedDB();
                if (!arrayBuffer) throw new Error("Không tìm thấy dữ liệu PDF trong bộ nhớ.");
                pdfData = { data: new Uint8Array(arrayBuffer) };
            } else {
                throw new Error("Loại cấu hình không hợp lệ.");
            }

            await renderPDF(pdfData);

        } catch (error) {
            console.error("Lỗi khi tải PDF báo giá:", error);
            if (pdfEmpty) {
                pdfEmpty.style.display = 'flex';
                pdfEmpty.querySelector('p').textContent = 'Không thể tải bảng báo giá. Vui lòng liên hệ trực tiếp để được hỗ trợ.';
            }
        } finally {
            if (pdfLoading) pdfLoading.style.display = 'none';
        }
    }

    // ---- LOAD DỮ LIỆU TỪ INDEXEDDB ----
    function loadFromIndexedDB() {
        return new Promise((resolve, reject) => {
            const dbName = "PDFStoreDB_ThuanPhat_Admin";
            const storeName = "pdfFiles";
            const request = indexedDB.open(dbName, 1);

            request.onsuccess = function (event) {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(storeName)) {
                    resolve(null);
                    return;
                }
                const transaction = db.transaction([storeName], "readonly");
                const store = transaction.objectStore(storeName);
                const getRequest = store.get('baogia_thietke');
                getRequest.onsuccess = (e) => resolve(e.target.result || null);
                getRequest.onerror = () => resolve(null);
            };
            request.onerror = () => resolve(null);
            request.onupgradeneeded = function(event) {
                // DB mới, chưa có data
            };
        });
    }

    // ---- RENDER PDF LÊN MÀN HÌNH ----
    async function renderPDF(pdfData) {
        pdfViewer.innerHTML = '';
        const pdf = await pdfjsLib.getDocument(pdfData).promise;

        pdfViewer.style.display = 'flex';

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const scale = 1.8;
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            canvas.className = 'pdf-page-canvas';
            pdfViewer.appendChild(canvas);
            await page.render({ canvasContext: context, viewport }).promise;
        }
    }
});