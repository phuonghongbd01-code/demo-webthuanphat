# QUY TẮC TẠO TRANG TĨNH (POC) DÀNH CHO ANTIGRAVITY

Tài liệu này là hệ thống tiêu chuẩn thiết kế (design system & standards) dành riêng cho bạn (Antigravity). Khi bạn được yêu cầu đọc file SRS.md để tạo các trang HTML tĩnh (Proof of Concept), bạn BẮT BUỘC phải tuân thủ nghiêm ngặt các quy tắc dưới đây.

## 1. CÔNG NGHỆ VÀ STACK SỬ DỤNG
Dự án gốc sử dụng Laravel, Tailwind CSS, và Alpine.js. Vì vậy, các file HTML POC bạn tạo ra phải mô phỏng chính xác môi trường này mà không cần backend:
- **Cấu trúc Thư mục (Folder Tree):** Bắt buộc tuân thủ chuẩn kiến trúc web tĩnh. Tất cả nội dung nằm trong một thư mục gốc (vd: `poc/`). Bên trong có `index.html` ngang hàng với các thư mục phân khu như `pages/` (chứa các trang con), `assets/images/` (chứa hình ảnh). Tuyệt đối **KHÔNG** vứt tất cả các file HTML bừa bãi lộn xộn trong cùng một cấp thư mục nếu dự án lớn.
- **HTML5**: Cấu trúc file chuẩn, semantic, dễ đọc, lưu trữ đúng thư mục phân quyền.
- **Tailwind CSS**: Sử dụng qua CDN (`<script src="https://cdn.tailwindcss.com"></script>`). Bạn bắt buộc phải cấu hình `tailwind.config` ngay trong file HTML để kích hoạt Dark Mode bằng class (`darkMode: 'class'`).
- **Alpine.js**: Sử dụng qua CDN (`<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>`) để xử lý TOÀN BỘ tương tác UI (Dropdown, Modal, Toggle, Tab). Không dùng Vanilla JS cho UI state.
- **Icons**: Sử dụng thư viện Lucide Icons hoặc Font Awesome qua CDN giống với dự án gốc.

## 2. QUY TẮC CHUYỂN ĐỔI GIAO DIỆN
Trong dự án gốc, giao diện được chia thành các file Blade. Khi tạo POC:
- Không tạo file `.blade.php`. Chỉ tạo file `.html` thuần.
- Chuyển đổi các kiến trúc Component (ví dụ `<x-header>`) thành các thẻ HTML thực tế với class Tailwind được áp dụng sẵn.
- Bất kỳ chỗ nào cần render dữ liệu giả (Mock data từ SRS), hãy render trực tiếp vào HTML.
- Sử dụng `x-data` của Alpine.js để điều khiển các thành phần động thay vì viết script ngoài.

## 3. QUY TẮC CHUẨN SEO (BẮT BUỘC)
Là một AI nâng cao, bạn phải đảm bảo mọi file HTML sinh ra đạt điểm SEO On-page tối đa:
- **Thẻ Meta:** 
  - Khai báo đầy đủ `<title>` (50-60 ký tự), `<meta name="description">` (150-160 ký tự).
  - Khai báo `<link rel="canonical" href="...">`.
- **Cấu trúc Semantic HTML:**
  - Bắt buộc dùng `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`. Không lạm dụng `<div>` vô tội vạ.
- **Hệ thống Heading:**
  - **Mỗi file HTML CHỈ ĐƯỢC CHỨA DUY NHẤT 1 thẻ `<h1>`.**
  - Cấu trúc Heading logic, từ H1 -> H2 -> H3, không bỏ qua các bậc.
- **Tối ưu Hình ảnh:**
  - Nếu dùng thẻ `<img>` (dù là ảnh placeholder), bắt buộc phải có `alt="..."`.
  - Thêm `loading="lazy"` cho các ảnh không xuất hiện ở màn hình đầu tiên (below the fold).

## 4. QUY TẮC UI/UX VÀ AESTHETICS (YÊU CẦU CAO)
- **Bám Sát SRS 100%:** Giao diện (UI), trải nghiệm người dùng (UX) và luồng thao tác (User Flow) BẮT BUỘC phải khớp hoàn toàn với những gì được mô tả trong `SRS.md`. Không tự ý sáng tạo sai lệch hoặc lược bỏ tính năng trừ khi người dùng yêu cầu rõ ràng.
- **Thiết kế Premium:** Áp dụng typography hiện đại (vd: Inter font), spacing rộng rãi, đổ bóng mượt mà (glassmorphism nếu cần).
- **Responsive:** Bắt buộc Mobile First (`sm:`, `md:`, `lg:`).
- **Hiệu ứng:** Sử dụng transition của Tailwind (`transition-all duration-300`) kết hợp với `x-transition` của Alpine để UI mượt mà khi hover hoặc đóng/mở pop-up.

## 5. RÀO CẢN AN TOAN ĐẦU CUỐI (TERMINAL GUARDRAILS)
- Vì bạn đang khởi tạo HTML tĩnh, bạn KHÔNG ĐƯỢC PHÉP tự ý chạy bất kỳ lệnh Terminal nào liên quan đến cài đặt NPM, Composer, hay thay đổi hệ thống.
- Chỉ được quyền sử dụng các công cụ thao tác File (tạo thư mục, viết nội dung file) bằng quyền hạn nội bộ của bạn, không thông qua bash shell. Cấm thực thi các lệnh bash/shell trừ khi Người Dùng yêu cầu rõ ràng.
