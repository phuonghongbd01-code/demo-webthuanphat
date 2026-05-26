# Đặc Tả Yêu Cầu Phần Mềm (SRS) - Trang Chủ (Home Page)

## 1. Tổng Quan Dự Án
Tài liệu này đặc tả các yêu cầu chức năng, phi chức năng, cấu trúc hệ thống và giao diện người dùng (UI/UX) cho **Trang Chủ** của website thiết kế thi công nội thất cao cấp Thuận Phát. Tài liệu đóng vai trò là kim chỉ nam cho quá trình thiết kế giao diện tĩnh (POC) và phát triển dự án.

- **Thương hiệu:** Thuận Phát (Thiết kế & Thi công nội thất cao cấp)
- **Mục tiêu:** Thể hiện đẳng cấp sang trọng, tối ưu trải nghiệm người dùng, chuẩn SEO On-page và đạt hiệu suất cao (Pagespeed Insights > 90).
- **Ngôn ngữ thiết kế:** Phong cách Luxury, Dark Theme với tone màu chủ đạo Đen (`#0F0F0F`) và Vàng Gold (`#C5A059`).

## 2. Yêu Cầu Kỹ Thuật (POC Standards)
- **Cấu trúc HTML:** Semantic HTML5 (sử dụng `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`).
- **CSS Architecture:** BEM (Block Element Modifier) kết hợp với các biến CSS tuỳ chỉnh (Custom Properties) trong `style.css`.
- **Javascript:** Vanilla Javascript cho các hiệu ứng tương tác (Slider, Counter, Mobile Menu, Modal).
- **Animation:** Thư viện AOS (Animate On Scroll) cho hiệu ứng cuộn trang mượt mà.
- **Responsive:** Mobile-first, đảm bảo giao diện hiển thị hoàn hảo trên Mobile, Tablet và Desktop.

## 3. Đặc Tả Giao Diện & Nội Dung (Cấu trúc Trang)

Trang chủ bao gồm các khối (Sections) chính được sắp xếp từ trên xuống dưới như sau:

### 3.1. Header & Navigation (`#main-header`)
- **Logo:** Đặt bên trái, màu trắng/vàng nổi bật trên nền tối.
- **Menu Desktop:** 
  - Bao gồm các mục: Trang Chủ, Giới Thiệu, Dự Án, Báo Giá, Cẩm Nang Nội Thất, Liên Hệ.
  - Các mục như **Giới Thiệu**, **Dự Án**, **Báo Giá**, **Cẩm Nang** sử dụng cấu trúc `simple-dropdown` (xổ xuống đơn giản, gọn gàng).
- **Menu Mobile:**
  - Nút Hamburger menu bên phải.
  - Khi mở, hiển thị danh sách dạng dọc. Các menu con tự động đẩy nội dung bên dưới xuống.
  - Sử dụng CSS ưu tiên (`!important`) để ẩn các hình ảnh/tiêu đề thừa thãi trong dropdown nhằm tối ưu diện tích.
- **Header State:** Trong suốt khi ở đầu trang, tự động có nền mờ và bóng đổ (Sticky) khi cuộn xuống.

### 3.2. Hero Banner (`#home`)
- **Visual:** Slider nền full-màn hình tự động chuyển đổi giữa các hình ảnh dự án lớn (có hỗ trợ vuốt trên mobile).
- **Nội dung:** 
  - H1: "PHÒNG NGỦ GỖ ÓC CHÓ" (Thẻ H1 duy nhất trên trang, phục vụ SEO).
  - Subtitle: "Thiết kế" / "Đẳng cấp sống trọn vẹn".
- **Controls:** Các chấm điều hướng (dots) ở dưới cùng.

### 3.3. Giới Thiệu & Thống Kê (`#gioi-thieu`)
- **Layout:** Chia 2 cột trên Desktop (Text bên trái, Ảnh Giám đốc/KTS bên phải trong khung vòm Arch).
- **Nội dung:** Tóm tắt năng lực cốt lõi của Thuận Phát. Nút CTA "Xem thêm".
- **Thống kê (Counter):** Hiển thị số liệu động "14+ Năm Hành Trình" và "500+ Công Trình". Tự động chạy số khi cuộn tới.

### 3.4. Dịch Vụ Cốt Lõi (`#dich-vu`)
- **Layout:** Grid 3 cột tương ứng với 3 dịch vụ: Cải tạo nhà, Thiết kế nội thất, Thi công nội thất.
- **Tương tác:** Hover vào thẻ sẽ phóng to ảnh nền (scale) và nâng thẻ lên (translateY).

### 3.5. Dự Án Nổi Bật (`#du-an`)
- **Layout:** Bố cục dạng Bazzar (1 ảnh lớn bên trái, 2 ảnh nhỏ xếp dọc bên phải).
- **Nội dung:** Hiển thị Video background tự động phát (autoplay, muted) thay vì ảnh tĩnh để tăng tính chân thực và thu hút.
- **Tương tác:** Overlay tối và icon Play mờ.

### 3.6. Thế Mạnh Công Ty (`#the-manh`)
- **Layout:** Grid 3 cột (Nguồn gỗ nhập khẩu, Chuyên gia hàng đầu, Xưởng sản xuất).
- **Thiết kế:** Mỗi thế mạnh có một hình ảnh lồng trong khung hình blob uốn lượn kết hợp gradient.

### 3.7. Đánh Giá Khách Hàng (`#danh-gia`)
- **Chức năng:** Carousel/Slider cho phép lướt qua các nhận xét của khách hàng (CEO, Giám đốc nghệ thuật, Doanh nhân).
- **Layout:** Desktop hiện 2 nhận xét cùng lúc, Mobile hiện 1 nhận xét. Nút điều hướng Trái/Phải.

### 3.8. Đối Tác Đồng Hành (`#doi-tac`)
- **Chức năng:** Thanh chạy ngang tự động liên tục (Marquee Auto-scroll) hiển thị logo các nhà cung cấp (An Cường, Ba Thanh, KES,...). Logo dạng xám (grayscale) và lên màu khi hover.

### 3.9. Tin Tức & Xu Hướng (`#xu-huong-noi-that`)
- **Layout:** Grid 4 cột (Desktop), 2 cột (Tablet), 1 cột (Mobile). Hiển thị 8 bài viết mới nhất.
- **CTA Banner:** Phần dưới cùng có 2 banner gọi hành động lớn (Đặt lịch tư vấn KTS / Đăng ký nhận tư vấn qua Zalo).

### 3.10. Footer (`#lien-he`)
- **Cấu trúc:** 5 cột thông tin (Giới thiệu, Dịch vụ, Báo giá, Hỗ trợ, Mạng xã hội & Bản đồ).
- **Bản đồ:** Nhúng Google Maps Iframe chính xác địa chỉ: Số 412 - Tầng 14, Đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City.

### 3.11. Các Thành Phần Trôi Nổi (Floating Widgets)
- **Nút liên hệ:** Zalo, Messenger, Hotline (nhấp nháy).
- **Modal Form:** Nút Đăng ký tư vấn mở ra một Popup Modal. Nền mờ, khóa cuộn trang nền.

## 4. Yêu Cầu SEO (Search Engine Optimization)
- Đảm bảo thẻ `<title>` và `<meta description>` đầy đủ và hấp dẫn.
- Thẻ `<h1>` duy nhất trên trang chủ (trong Hero Banner).
- Ảnh sử dụng thẻ `alt` mô tả nội dung. Cấu hình `loading="lazy"` cho ảnh ở dưới nếp gấp màn hình (Below the fold).
- Cấu trúc Open Graph (`og:title`, `og:image`, `og:description`) để tối ưu hiển thị khi chia sẻ trên mạng xã hội.

## 5. Quy Trình Cập Nhật & Mở Rộng
Khi bổ sung một trang con mới (ví dụ: `about.html`, `services.html`):
1. Tham chiếu Header và Footer từ tài liệu này (sử dụng lại mã HTML chuẩn).
2. Xây dựng nội dung phần `<main>` theo cấu trúc Grid, áp dụng các class tiện ích đã định nghĩa trong `style.css` (`btn-gold`, `section-title`, `section-padding`).
3. Đảm bảo tuân thủ nghiêm ngặt cấp bậc thẻ Heading (H1 -> H2 -> H3) để duy trì cấu trúc ngữ nghĩa và tối ưu SEO.
..