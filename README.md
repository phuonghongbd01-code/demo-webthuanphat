# Đặc Tả Yêu Cầu Phần Mềm (SRS): Module Trang Chủ (Home Module)

## 1. Tổng Quan Dự Án

Tài liệu này đặc tả cấu trúc hệ thống, cơ sở dữ liệu và yêu cầu giao diện cho Trang Chủ của website thiết kế thi công nội thất cao cấp (AHome/Thuận Phát).

- **Công nghệ:** Laravel 10+, PHP 8.x, MySQL, Laravel Blade (SSR ưu tiên cho SEO), VueJS 3 (Composition API cho các UI tương tác).
- **Kiến trúc:** Bám sát chuẩn `nwidart/laravel-modules`.
- **Mục tiêu cốt lõi:** Điểm Pagespeed Insights > 90, chuẩn hóa cấu trúc HTML5 Semantic, và tối ưu hóa On-page SEO tự động.

## 2. Kiến Trúc Cấu Trúc Thư Mục (Laravel Module)

Module quản lý trang chủ và các thành phần hiển thị trên trang chủ sẽ được đặt tại `Modules/Home`. Do trang chủ lấy dữ liệu từ nhiều thực thể khác nhau (Dự án, Tin tức), nó sẽ giao tiếp với các Module khác qua Service Class.

```text
Modules/Home/
├── Config/             # Cấu hình SEO mặc định, giới hạn query.
├── Database/
│   ├── Migrations/     # Bảng `home_sections`, `testimonials`, `settings`
│   └── Seeders/        # Dữ liệu mẫu (Hero banner, Giới thiệu)
├── Entities/           # Testimonial, HomeSection, Setting
├── Http/
│   ├── Controllers/    # HomeController (trả về Blade view)
│   └── ViewComposers/  # Inject global data (Menu, Footer)
├── Resources/
│   ├── assets/js/      # Vue Components (Sliders, Tabs, LazyLoad)
│   └── views/
│       ├── index.blade.php      # Trang chủ chính
│       └── components/          # Các block: hero, about, services, projects...
├── Routes/
│   └── web.php         # Route '/'
└── Services/           # Caching layer, Schema Markup Generator
```

## 3. Đặc Tả Cơ Sở Dữ Liệu (MySQL)

Để trang chủ có thể tùy biến mà không cần hard-code, cần cấu trúc các bảng sau:

### 3.1 Bảng `settings` (Cấu hình chung & Footer)

Lưu trữ dạng Key-Value cho các thông số toàn cục.

- **key:** `site_logo`, `contact_address`, `contact_phone`, `contact_email`, `social_links`, `stats_experience`, `stats_customers`.
- **value:** (Text/JSON).

### 3.2 Bảng `home_sections` (Quản lý nội dung tĩnh các Block)

- `id`, `section_key` (hero, about, strengths).
- `title` (Tiêu đề chính - H1/H2).
- `subtitle` (Tiêu đề phụ).
- `content` (Mô tả).
- `image_url` (Ảnh background/Ảnh đại diện).
- `meta_data` (JSON lưu các thuộc tính mở rộng).

### 3.3 Bảng `testimonials` (Đánh giá khách hàng)

- `id`, `customer_name`, `customer_title` (VD: CEO), `avatar_url`, `content`, `rating`, `is_active`.

*(Lưu ý: Dịch vụ, Dự án nổi bật, và Tin tức sẽ được Query trực tiếp từ `Modules/Service`, `Modules/Project`, và `Modules/Post` đã định nghĩa trước đó, giới hạn `limit(3)` hoặc `limit(4)`).*

## 4. Đặc Tả Yêu Cầu Giao Diện (UI) & SEO (Ưu Tiên Tuyệt Đối)

**NGUYÊN TẮC SEO KIẾN TRÚC:**
- **SSR (Server-Side Rendering):** Toàn bộ cấu trúc HTML, Text, Link, Ảnh phải được render bằng Laravel Blade khi tải trang lần đầu. KHÔNG dùng VueJS để fetch dữ liệu trang chủ qua API nhằm đảm bảo Bot Google cào được 100% nội dung ngay lập tức.
- **VueJS:** Chỉ sử dụng cho các hiệu ứng (Carousel/Slider cho phần đánh giá), Lazyload ảnh nâng cao, hoặc các tương tác người dùng (Menu mobile).

Dưới đây là cấu trúc Semantic HTML và thẻ Heading (H-tags) từ trên xuống dưới theo ảnh thiết kế:

### 4.1. Header & Điều hướng (Navigation)

- **UI:** Logo trái, Menu giữa, Nút Search phải. Nền trong suốt đè lên Hero banner.
- **SEO:**
  - Thẻ `<header>` chuẩn HTML5.
  - Logo phải được bọc trong thẻ `<a>` trỏ về Home `/`, chứa thẻ `<img alt="Thiết kế nội thất cao cấp AHome">`.
  - Thẻ `<nav>` chứa các liên kết. Liên kết nội bộ phải có thuộc tính `title` mô tả.

### 4.2. Hero Banner (Section 1)

- **UI:** Ảnh nền full width chất lượng cao, text canh giữa.
- **SEO:**
  - Background image nên sử dụng thẻ `<picture>` hoặc thuộc tính `srcset` trong `<img fetchpriority="high">` thay vì CSS background-image để Google index ảnh.
  - Heading 1 (`<h1>`): "Thiết kế PHÒNG NGỦ GỖ ÓC CHÓ" (Phải là thẻ H1 duy nhất trên trang).

### 4.3. Giới Thiệu & Thống Kê (Section 2)

- **UI:** Chia 2 cột: Cột chữ có nút "Xem thêm", Cột ảnh (KTS Lưu Núi Lộc). Block thống kê số năm kinh nghiệm ở dưới.
- **SEO:**
  - Heading 2 (`<h2>`): "AHOME ĐƠN VỊ THIẾT KẾ THI CÔNG NỘI THẤT CAO CẤP".
  - Nút "Xem thêm" là thẻ `<a>` với href cụ thể, không dùng `onclick` Javascript.
  - Hình ảnh KTS phải có `alt="KTS Lưu Núi Lộc - Chuyên gia thiết kế nội thất"`.

### 4.4. Dịch Vụ (Section 3)

- **UI:** 3 Cards (Thiết kế, Thi công, Sản xuất).
- **SEO:**
  - Heading 2 (`<h2>`): "DỊCH VỤ TẠI AHOME CÓ GÌ?".
  - Heading 3 (`<h3>`): Tên các dịch vụ trong Card ("Thiết kế nội thất",...).
  - Component Blade: Vòng lặp `foreach` lấy dữ liệu, ảnh phải có thuộc tính `loading="lazy"`.

### 4.5. Dự Án Nổi Bật (Section 4)

- **UI:** Layout Grid (1 lớn bên trái, 2 nhỏ bên phải). Ảnh có overlay tối và text.
- **SEO:**
  - Heading 2 (`<h2>`): "DỰ ÁN NỔI BẬT".
  - Heading 3 (`<h3>`): Tên dự án ("Biệt thự siêu sang cao cấp", "Penthouse...").
  - URL trỏ về chi tiết dự án phải thân thiện (VD: `/du-an/biet-thu-sieu-sang`).

### 4.6. Thế Mạnh (Section 5)

- **UI:** 3 hình tròn chứa ảnh và mô tả.
- **SEO:**
  - Heading 2 (`<h2>`): "THẾ MẠNH CỦA AHOME".
  - Heading 3 (`<h3>`): "Nguồn gỗ nhập khẩu", "Chuyên gia hàng đầu",...

### 4.7. Đánh Giá Khách Hàng (Section 6)

- **UI:** 2 block hiển thị Quote, Avatar, Tên. (Có thể dùng VueJS làm Slider nếu số lượng > 2).
- **SEO:**
  - Heading 2 (`<h2>`): "ĐÁNH GIÁ CỦA KHÁCH HÀNG & CHUYÊN GIA".
  - Cần tích hợp `Schema.org/Review` (JSON-LD) tại block này.

### 4.8. Báo Chí & Tin Tức (Section 7)

- **UI:** Danh sách logo đối tác, 3 thẻ bài viết blog/news.
- **SEO:**
  - Heading 2 (`<h2>`): "BÁO CHÍ NÓI VỀ AHOME & XU HƯỚNG MỚI".
  - Heading 3 (`<h3>`): Tiêu đề bài viết ("Xu Hướng Nội Thất Gỗ Óc Chó 2026").
  - Sử dụng thẻ `<article>` cho từng card bài viết.
  - Liên kết nội bộ từ trang chủ đến bài viết rất quan trọng để truyền "link juice".

### 4.9. Footer

- **UI:** Logo, thông tin liên hệ, mạng xã hội, copyright.
- **SEO:**
  - Thẻ `<footer>`.
  - Phải chứa thông tin trùng khớp với Local SEO (Google My Business). Tích hợp cấu trúc dữ liệu `Schema.org/LocalBusiness`.

## 5. Đặc Tả Tối Ưu Hiệu Suất & SEO Nâng Cao (Dành Cho Lập Trình Viên)

- **Định dạng WebP/AVIF:** Toàn bộ ảnh tải lên qua CMS (Spatie Media Library) phải tự động convert sang WebP và tạo nhiều kích thước (Responsive Images).
- **Tối ưu CSS/JS:** Laravel Vite build và minify file assets. Các file CSS không quan trọng (Non-critical CSS) cần load bất đồng bộ.
- **JSON-LD Schema (Cực kỳ quan trọng):** Sử dụng package `spatie/schema-org` để render động các đoạn script sau vào thẻ `<head>` của trang chủ:
  - **Organization:** Khai báo tên công ty, logo, URL, social profiles.
  - **WebSite:** Khai báo thanh tìm kiếm (SearchAction).
  - **LocalBusiness:** Khai báo địa chỉ (Quận 1, TP.HCM), số điện thoại (0909 123 456).
- **Thẻ Meta Dynamic:** Kế thừa logic từ `Modules/Post` (Bài viết SEO), Trang chủ cũng phải cho phép Admin custom `meta_title`, `meta_description`, và `og:image` từ trong Database.

> **Ghi chú cho AI Agent:** Khi tạo cấu trúc Blade cho trang `index.blade.php`, vui lòng tuân thủ nghiêm ngặt cấp bậc thẻ Heading (H1 -> H2 -> H3) như đã định nghĩa. Tuyệt đối không dùng H-tag để style chữ lớn, chỉ dùng cho cấu trúc ngữ nghĩa (semantic).