---
description: Quy trình làm việc (workflow) chi tiết dành cho AI (Antigravity) để đọc hiểu tài liệu đặc tả phần mềm (SRS) và tự động tạo các trang giao diện HTML tĩnh (POC) tuân thủ nghiêm ngặt các tiêu chuẩn SEO, UI/UX.
---
# WORKFLOW THỰC THI (PLAN) DÀNH CHO ANTIGRAVITY

Đây là quy trình làm việc chuẩn dành riêng cho bạn (Antigravity). Khi người dùng cung cấp một file `SRS.md` và yêu cầu tạo giao diện POC tĩnh, bạn PHẢI áp dụng quy trình `Planning Mode` của bạn kết hợp với các công cụ (Tools) mà bạn có.

## BƯỚC 1: Planning Mode & Research (Phân Tích SRS)
- Đọc kỹ file `SRS.md` bằng công cụ `view_file` (hoặc read content).
- Xác định tổng số trang HTML cần tạo, các UI Components lặp lại, và các luồng (User Flows) chính.
- **KIỂM TRA TÍNH NHẤT QUÁN (BẮT BUỘC):** Đối chiếu yêu cầu (prompt) hiện tại của người dùng với nội dung đặc tả trong `SRS.md`. Nếu yêu cầu của người dùng đưa ra KHÁC BIỆT hoặc MÂU THUẪN với thiết kế/luồng UX trong SRS, bạn **PHẢI** tạo câu hỏi xác nhận rõ ràng trong mục `Open Questions` của `implementation_plan.md` và DỪNG LẠI chờ người dùng (USER) confirm. Không tự ý code khi có sự sai lệch chưa được làm rõ.
- Tạo một artifact `implementation_plan.md` với `request_feedback = true` để đề xuất cấu trúc HTML, Mock Data sẽ tạo.
- Chờ người dùng (USER) duyệt plan trước khi chuyển sang bước code.

## BƯỚC 2: Khởi tạo Task Tracking
- Sau khi được duyệt plan, hãy tạo artifact `task.md` để liệt kê các checkbox (TODO) cho từng trang HTML và từng phần của giao diện.
- Cập nhật liên tục `task.md` khi bạn hoàn thành code mỗi trang.

## BƯỚC 3: Xây Dựng & Code HTML (Execution)
- Sử dụng công cụ `write_to_file` để tạo các file theo cấu trúc cây thư mục (folder tree) web chuẩn. Yêu cầu **BẮT BUỘC** phân tách thư mục nếu POC có nhiều hơn 1 trang:
  ```text
  poc/
  ├── index.html              # Trang chủ
  ├── pages/                  # Thư mục chứa các trang con
  │   ├── about.html
  │   ├── contact.html
  │   └── services/           # Có thể lồng thêm thư mục nếu cần phân nhóm
  │       └── detail.html
  ├── assets/                 # Thư mục chứa tài nguyên tĩnh (nếu có sử dụng local)
  │   ├── css/
  │   ├── js/
  │   └── images/
  ```
- Áp dụng triệt để các tiêu chuẩn từ file `rule.md` (Dùng CDN Tailwind, Alpine.js, Semantic HTML, và quy tắc SEO).
- Viết mã nguồn với tư duy Component (Dù là HTML tĩnh, hãy sử dụng chú thích `<!-- Header Component -->` để phân định các khối).
## BƯỚC 4: Trình Duyệt Debug (BẮT BUỘC DÙNG `browser_subagent`)
- Đây là bước đặc biệt quan trọng. Bạn KHÔNG ĐƯỢC chỉ review code.
- Bạn **PHẢI** gọi công cụ `browser_subagent` của bạn để mở trực tiếp file HTML (ví dụ: cấp URL `file:///C:/Users/ADMIN/Desktop/vmc-core-laravel/poc/index.html`).
- Trong tham số `Task` của `browser_subagent`, bạn phải yêu cầu nó thực hiện các hành động:
  1. Click vào các button, tab để kiểm tra xem Alpine.js có hoạt động không (có mở popup/dropdown không).
  2. Đọc nội dung DOM xem thẻ `<h1>` có duy nhất không, thẻ `<img>` có thuộc tính `alt` chưa.
  3. Kiểm tra Console xem có lỗi nào không.
  4. Xác nhận giao diện hiển thị đúng nội dung từ SRS.

## BƯỚC 5: Tổng Kết & Bàn Giao
- Sau khi quá trình Debug hoàn tất và đã fix lỗi (nếu có), hãy tạo artifact `walkthrough.md`.
- Trong `walkthrough.md`, tóm tắt các file đã tạo, chứng minh (dựa vào kết quả browser_subagent) rằng giao diện hoạt động trơn tru và đáp ứng 100% chuẩn SEO.
