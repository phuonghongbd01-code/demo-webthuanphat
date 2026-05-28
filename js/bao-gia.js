// js/bao-gia.js

document.addEventListener('DOMContentLoaded', function () {

    // Hàm chuyển đổi giữa các Tab Menu
    window.showSection = function (sectionId) {
        document.querySelectorAll('.section-container').forEach(el => {
            el.classList.remove('active-section');
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }
    }

    // Hàm sinh HTML tự động cho lưới 9 ô (Dự án 3x3)
    function renderGrid(containerId, prefix) {
        let container = document.getElementById(containerId);
        if (!container) return;

        let content = '';
        for (let i = 1; i <= 9; i++) {
            content += `
                <div class="grid-item">
                    <img src="images/project_${i % 3 + 1}.png" alt="Dự án ${i}">
                    <div class="grid-item-content">
                        <h4>Dự án ${prefix} ${i}</h4>
                        <p>Khách hàng: Anh A <br> Diện tích: 100m2</p>
                    </div>
                </div>
            `;
        }
        container.innerHTML = content;
    }

    // Hàm cuộn trang đến phần Xu hướng nội thất
    window.scrollToTrends = function () {
        const trendsSection = document.getElementById('xu-huong');
        if (trendsSection) {
            trendsSection.scrollIntoView({ behavior: 'smooth' });
        }
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

    // Xử lý hash trên URL khi tải trang
    function handleHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showSection(hash);
            // Cập nhật dropdown button text nếu cần
            const buttonText = document.querySelector(`.pricing-dropdown-content button[onclick="showSection('${hash}')"]`);
            if (buttonText) {
                document.querySelector('.pricing-dropdown .dropbtn').innerHTML = `${buttonText.innerText} ▼`;
            }
        } else {
            // Mặc định hiển thị tab đầu tiên
            showSection('thiet-ke');
        }
    }

    // Render grids
    renderGrid('tk-projects', 'Thiết kế');
    renderGrid('tc-projects', 'Thi công');

    // Handle initial page load
    handleHash();

    // Handle hash changes (e.g., user clicks back/forward)
    window.addEventListener('hashchange', handleHash);
});