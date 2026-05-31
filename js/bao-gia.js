// js/bao-gia.js

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

    // Hàm mở file PDF (Mô phỏng nhảy trang)
    window.openPDF = function (pdfName) {
        alert("Hệ thống sẽ chuyển hướng hoặc mở popup hiển thị file báo giá: " + pdfName);
        // Code thực tế: window.open('path/to/pdfs/' + pdfName, '_blank');
    }

    // Logic xử lý form mục Tra giá theo nhu cầu
    window.toggleForm = function () {
        let type = document.getElementById('service-type').value;
        document.getElementById('form-thiet-ke').style.display = (type === 'thiet-ke') ? 'block' : 'none';
        document.getElementById('form-thi-cong').style.display = (type === 'thi-cong') ? 'block' : 'none';
        const resultBox = document.getElementById('result-tk');
        if (resultBox) {
            resultBox.style.display = 'none'; // reset kết quả
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
    // ==== PDF VIEWER WITH INDEXEDDB PERSISTENCE ====
    // ========================================================

    // Check if pdfjsLib is available
    if (typeof pdfjsLib === 'undefined') {
        console.error("PDF.js is not loaded. Please include the library.");
        return;
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const loading = document.getElementById('loading');
    const pdfViewer = document.getElementById('pdf-viewer');

    // Only run PDF viewer code if the elements exist on the page
    if (!dropZone || !fileInput || !loading || !pdfViewer) {
        return;
    }

    // ==== KHỞI TẠO CƠ SỞ DỮ LIỆU INDEXEDDB ĐỂ LƯU FILE ====
    const dbName = "PDFStoreDB_ThuanPhat";
    const storeName = "pdfFiles";
    let db;

    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = function (event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName);
        }
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        // Mỗi khi load lại web, tự động lấy file cũ ra hiển thị
        loadSavedPDF();
    };

    request.onerror = function (event) {
        console.error("Lỗi khi mở IndexedDB:", event.target.errorCode);
    };

    // Lưu file vào DB
    function savePDFToDB(arrayBuffer) {
        if (!db) return;
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        // Ghi đè file mới với key là 'current_pdf_baogia'
        store.put(arrayBuffer, 'current_pdf_baogia');
    }

    // Lấy file từ DB
    function loadSavedPDF() {
        if (!db) return;
        const transaction = db.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        const getRequest = store.get('current_pdf_baogia');

        getRequest.onsuccess = function (event) {
            const arrayBuffer = event.target.result;
            if (arrayBuffer) {
                const typedarray = new Uint8Array(arrayBuffer);
                renderPDFData(typedarray);
            }
        };
        getRequest.onerror = function (event) {
            console.error("Lỗi khi lấy PDF từ IndexedDB:", event.target.errorCode);
        }
    }
    // ========================================================

    // SỰ KIỆN KÉO THẢ VÀ CHỌN FILE
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');

        const file = e.dataTransfer.files[0];
        if (file && file.type === "application/pdf") {
            processNewFile(file);
        } else {
            alert("Vui lòng chỉ tải lên file có định dạng PDF.");
        }
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            processNewFile(file);
        }
    });

    // HÀM XỬ LÝ FILE MỚI KHI NGƯỜI DÙNG KÉO VÀO
    function processNewFile(file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const arrayBuffer = e.target.result;
            const typedarray = new Uint8Array(arrayBuffer);

            // 1. Hiển thị PDF lên màn hình
            renderPDFData(typedarray);

            // 2. Lưu ngầm file đó vào bộ nhớ trình duyệt
            savePDFToDB(arrayBuffer);
        };

        reader.readAsArrayBuffer(file);
    }

    // HÀM VẼ PDF TỪ DỮ LIỆU NHỊ PHÂN
    async function renderPDFData(typedarray) {
        loading.style.display = 'block';
        pdfViewer.innerHTML = '';
        pdfViewer.style.display = 'none';

        try {
            const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;

            // Render thành công: Ẩn vùng drop, hiện vùng xem PDF
            pdfViewer.style.display = 'flex';
            dropZone.style.display = 'none';

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const scale = 1.5;
                const viewport = page.getViewport({ scale: scale });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                canvas.className = 'pdf-page-canvas';
                pdfViewer.appendChild(canvas);
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                await page.render(renderContext).promise;
            }
        } catch (error) {
            console.error("Lỗi khi render PDF:", error);
            alert("Đã xảy ra lỗi khi cố gắng hiển thị file này. Vui lòng thử lại với file khác.");

            // Render thất bại: Ẩn vùng xem PDF, hiện lại vùng drop
            pdfViewer.style.display = 'none';
            dropZone.style.display = 'block';
        } finally {
            loading.style.display = 'none';
        }
    }
});