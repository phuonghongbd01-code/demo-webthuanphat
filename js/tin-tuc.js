document.addEventListener("DOMContentLoaded", function () {
    // Xử lý active tab
    const tabs = document.querySelectorAll('.news-tabs a');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Xóa class 'active' khỏi toàn bộ các tab
            tabs.forEach(t => t.classList.remove('active'));

            // Thêm class 'active' vào tab vừa click
            this.classList.add('active');
        });
    });
});