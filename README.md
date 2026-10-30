# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Blog và Sanity CMS

Trang `/blog` và `/blog/:slug` đọc bài viết đã xuất bản từ Sanity. Website không nhúng token ghi dữ liệu. Bản nháp chỉ có trong Sanity Studio và không xuất hiện trên trang công khai.

### 1. Tạo project Sanity

1. Đăng nhập tại [sanity.io/manage](https://www.sanity.io/manage) và tạo một project mới.
2. Tạo dataset tên `production` (dataset công khai để website đọc được bài đã xuất bản mà không cần token).
3. `npm run dev` gọi Sanity qua proxy của Vite, nên máy local không cần CORS. Khi triển khai website, mở **API → CORS origins** và thêm domain production. Không bật credentials, vì frontend không gửi token.

### 2. Cấu hình biến môi trường

Website:

```bash
cp .env.example .env
```

Điền `VITE_SANITY_PROJECT_ID`. Giữ `VITE_SANITY_DATASET=production`. Không thêm token vào file này.

Studio:

```bash
cp studio/.env.example studio/.env
```

Điền cùng project ID và dataset.

### 3. Chạy website và Studio

Website chạy được trên Node.js 20:

```bash
npm install
npm run dev
```

Sanity Studio 6 cần Node.js 22.12 trở lên. Nếu terminal đang dùng Node 20, chuyển trước khi cài và chạy Studio:

```bash
nvm use 22
cd studio
npm install
npm run dev
```

Hoặc từ thư mục gốc, sau khi đã cài dependency trong `studio/`: `npm run studio`.

Studio mặc định chạy tại `http://localhost:3333`. Đăng nhập bằng tài khoản Sanity khi được hỏi.

### 4. Xuất bản một bài và kiểm tra

1. Trong Studio, mở **Bài viết → Create**.
2. Nhập tiêu đề, tạo slug, tóm tắt, ảnh bìa, mô tả ảnh, nội dung, chuyên mục và ngày xuất bản.
3. Bấm **Publish**. Bản nháp (Save without publishing) sẽ không hiện trên website.
4. Mở `http://localhost:5173/blog`. Bài vừa xuất bản nằm trong lưới thẻ; bấm **Đọc tiếp** để vào `/blog/:slug`.
5. CDN của Sanity có thể chậm vài giây sau khi publish. Tải lại trang nếu bài chưa xuất hiện ngay.

Nếu thiếu project ID, `/blog` hiển thị trạng thái chưa kết nối và không dùng bài viết giả.
