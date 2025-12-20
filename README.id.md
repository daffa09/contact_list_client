<!-- portfolio -->
<!-- slug: contact-list-client -->
<!-- title: Klien Daftar Kontak -->
<!-- description: Aplikasi manajemen kontak Vue.js dengan integrasi API RESTful -->
<!-- image: https://github.com/user-attachments/assets/738bed9a-a14d-4d7f-9b47-e14bf10c1c2e -->
<!-- tags: vue, javascript, vite, manajemen-kontak, rest-api -->

# Klien Daftar Kontak (Contact List Client)

<img width="1536" height="1024" alt="contact-list-client" src="https://github.com/user-attachments/assets/738bed9a-a14d-4d7f-9b47-e14bf10c1c2e" />

Aplikasi manajemen kontak modern yang dibangun dengan Vue.js dan Vite, menampilkan antarmuka bersih untuk mengelola kontak pribadi atau profesional. Aplikasi sisi klien ini terintegrasi secara mulus dengan backend API RESTful untuk operasi CRUD lengkap.

## 📋 Ringkasan

Contact List Client adalah aplikasi frontend yang menyediakan antarmuka intuitif untuk mengelola kontak. Dibangun dengan Vue.js 3 dan ditenagai oleh Vite untuk pengembangan yang sangat cepat, aplikasi ini mendemonstrasikan praktik pengembangan frontend modern dan pola integrasi API.

## ✨ Fitur

- **Manajemen Kontak Lengkap**
  - Menambah kontak baru dengan informasi detail.
  - Melihat semua kontak dalam daftar yang terorganisir.
  - Memperbarui detail kontak yang sudah ada.
  - Menghapus kontak dengan konfirmasi.

- **Antarmuka Pengguna Modern**
  - Desain bersih dan responsif.
  - Transisi dan animasi yang halus.
  - Tata letak ramah seluler.
  - Pengalaman pengguna yang intuitif.

- **Data Real-time**
  - Pembaruan instan melalui integrasi API.
  - Pembaruan UI optimistik.
  - Penanganan kesalahan dan umpan balik pengguna.

- **Cari dan Filter**
  - Fungsionalitas pencarian kontak cepat.
  - Filter kontak berdasarkan kategori.
  - Urutkan kontak secara alfabetis.

## 🛠️ Teknologi yang Digunakan

- **Vue.js 3**: Framework JavaScript progresif.
- **Vite**: Alat bantu frontend generasi berikutnya.
- **JavaScript (ES6+)**: Fitur JavaScript modern.
- **Axios/Fetch**: Client HTTP untuk permintaan API.
- **Vue Router**: Routing sisi klien.
- **Composables**: Pola composition API Vue 3.

## 📁 Struktur Proyek

```
contact_list_client/
├── src/
│   ├── components/         # Komponen Vue
│   │   ├── ContactList.vue
│   │   ├── ContactForm.vue
│   │   └── ContactItem.vue
│   ├── views/             # Tampilan halaman
│   ├── router/            # Konfigurasi rute
│   ├── services/          # Lapisan layanan API
│   ├── composables/       # Fungsi komposisi yang dapat digunakan kembali
│   ├── assets/            # Aset statis
│   ├── App.vue           # Komponen root
│   └── main.js           # Titik masuk aplikasi
├── public/               # File statis publik
├── index.html           # Template HTML
├── package.json         # Dependensi dan skrip
└── vite.config.js      # Konfigurasi Vite
```

## 🔗 Kebutuhan Backend

**Penting**: Aplikasi klien ini memerlukan server backend agar dapat berfungsi dengan benar.

Server API backend tersedia di: [contact_list_server](https://github.com/daffa09/contact_list_server)

Pastikan server sudah berjalan sebelum memulai aplikasi klien.

## 🚀 Memulai

### Prasyarat

- Node.js 16.x atau lebih baru.
- Pengelola paket npm atau yarn.
- Server backend sedang berjalan (lihat tautan di atas).

### Langkah Instalasi

1. **Clone repositori**
   ```bash
   git clone <repository-url>
   cd contact_list_client
   ```

2. **Install dependensi**
   
   Instalasi standar:
   ```bash
   npm install
   ```
   
   Jika Anda menemui masalah dependensi:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Konfigurasi Endpoint API**
   
   Buat file `.env` di direktori root:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```
   
   Sesuaikan URL agar sesuai dengan alamat server backend Anda.

4. **Jalankan server backend**
   
   Ikuti instruksi di [repositori backend](https://github.com/daffa09/contact_list_server) untuk memulai server API.

5. **Jalankan server pengembangan**
   ```bash
   npm run dev
   ```

6. **Akses aplikasi**
   
   Buka browser Anda dan navigasi ke:
   ```
   http://localhost:5173
   ```
   
   (Port mungkin berbeda - periksa output konsol)

## 💻 Panduan Penggunaan

### Menambah Kontak

1. Klik tombol "Add Contact".
2. Isi formulir kontak:
   - Nama (wajib)
   - Email
   - Nomor telepon
   - Alamat
   - Catatan tambahan
3. Klik "Save" untuk membuat kontak.

### Melihat Kontak

- Semua kontak ditampilkan di tampilan daftar utama.
- Setiap kartu kontak menunjukkan informasi penting.
- Klik pada kontak untuk melihat detail lengkap.

### Mengedit Kontak

1. Klik tombol "Edit" pada kartu kontak.
2. Ubah bidang yang diinginkan pada formulir.
3. Klik "Update" untuk menyimpan perubahan.
4. Perubahan segera tercermin dalam daftar.

### Menghapus Kontak

1. Klik tombol "Delete" pada kartu kontak.
2. Konfirmasi penghapusan di dialog popup.
3. Kontak dihapus dari daftar.

### Mencari Kontak

- Gunakan bilah pencarian di bagian atas.
- Ketik nama, email, atau nomor telepon.
- Hasil diperbarui secara real-time saat Anda mengetik.

## 🔧 Pengembangan

### Skrip yang Tersedia

```bash
# Jalankan server pengembangan dengan hot-reload
npm run dev

# Bangun untuk produksi
npm run build

# Pratinjau build produksi secara lokal
npm run preview

# Jalankan linter
npm run lint

# Perbaiki masalah linting
npm run lint:fix
```

### Konfigurasi Proyek

Edit `vite.config.js` untuk menyesuaikan:
- Opsi build.
- Pengaturan server pengembangan.
- Konfigurasi plugin.
- Alias jalur (path aliases).

## 📡 Integrasi API

### Endpoint API yang Digunakan

| Metode | Endpoint | Deskripsi |
|--------|----------|-------------|
| GET | `/api/contacts` | Mengambil semua kontak |
| GET | `/api/contacts/:id` | Mengambil satu kontak |
| POST | `/api/contacts` | Membuat kontak baru |
| PUT | `/api/contacts/:id` | Memperbarui kontak |
| DELETE | `/api/contacts/:id` | Menghapus kontak |

### Contoh Layanan API

```javascript
// src/services/contactService.js
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const contactService = {
  getAllContacts: () => axios.get(`${API_URL}/contacts`),
  getContact: (id) => axios.get(`${API_URL}/contacts/${id}`),
  createContact: (data) => axios.post(`${API_URL}/contacts`, data),
  updateContact: (id, data) => axios.put(`${API_URL}/contacts/${id}`, data),
  deleteContact: (id) => axios.delete(`${API_URL}/contacts/${id}`)
}
```

## 🎨 Kustomisasi

### Styling

Aplikasi menggunakan gaya lingkup (scoped styles) dalam komponen Vue. Untuk kustomisasi:

1. Edit gaya spesifik komponen dalam file `.vue`.
2. Ubah gaya global di `src/assets/main.css`.
3. Konfigurasi variabel tema.

### Menambah Fitur

Ekstensi populer:
- Kategori/grup kontak.
- Impor/ekspor kontak.
- Avatar kontak.
- Filter pencarian tingkat lanjut.
- Operasi massal.
- Berbagi kontak.

## 🐛 Pemecahan Masalah

### Masalah Umum

1. **Tidak dapat terhubung ke API**
   - Verifikasi server backend sudah berjalan.
   - Periksa URL API di file `.env`.
   - Pastikan CORS sudah dikonfigurasi dengan benar di backend.

2. **Error npm install**
   - Coba `npm install --legacy-peer-deps`.
   - Bersihkan cache npm: `npm cache clean --force`.
   - Hapus `node_modules` dan `package-lock.json`, lalu instal ulang.

3. **Port sudah digunakan**
   - Ubah port di `vite.config.js`:
   ```javascript
   export default {
     server: {
       port: 3001
     }
   }
   ```

4. **Hot reload tidak berfungsi**
   - Restart server pengembangan.
   - Periksa batas file watcher (Linux).
   - Verifikasi konfigurasi Vite.

## 🚀 Deployment

### Bangun untuk Produksi

```bash
npm run build
```

Ini akan membuat build yang dioptimalkan di folder `dist/`.

### Opsi Deployment

- **Vercel**: Deployment otomatis dari Git.
- **Netlify**: Seret-dan-lepas atau integrasi Git.
- **GitHub Pages**: Hosting statis.
- **AWS S3**: Dengan CloudFront CDN.
- **Hosting statis apa pun**: Sajikan folder `dist/`.

### Variabel Lingkungan untuk Produksi

Perbarui `.env.production`:
```env
VITE_API_URL=https://api-produksi-anda.com/api
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan kirim pull request atau buka issue untuk bug dan permintaan fitur.

## 📄 Lisensi

Proyek ini bersifat open source dan tersedia untuk tujuan pendidikan dan komersial.

## 🔗 Proyek Terkait

- Backend API: [contact_list_server](https://github.com/daffa09/contact_list_server)

---

Dibangun dengan ❤️ menggunakan Vue.js dan Vite
