function handleFormSubmit(event) {
    event.preventDefault(); // Ngăn trang bị reload lại

    // Lấy dữ liệu từ form
    const name = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Giả lập thông báo gửi thành công
    if (name && phone && message) {
        alert(`[ĐĂNG KÝ THÀNH CÔNG]\nCảm ơn anh/chị ${name} đã gửi yêu cầu tư vấn!\n\nThông tin SĐT: ${phone}\nNội dung: "${message}"\n\nĐội ngũ KTS của chúng tôi sẽ gọi lại hỗ trợ anh/chị trong thời gian sớm nhất.`);

        // Xóa trắng form sau khi gửi
        document.getElementById('ahomeContactForm').reset();
    } else {
        alert('Vui lòng điền đầy đủ: Họ tên, Số điện thoại và Nội dung!');
    }
}