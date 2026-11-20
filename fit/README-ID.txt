FIT & MEN'S HEALTH TRACKER V8 - PWA

ISI PAKET
- index.html: aplikasi utama
- manifest.webmanifest: identitas aplikasi untuk instalasi
- sw.js: cache/offline service worker
- icons/: ikon aplikasi

PENTING
PWA harus di-host melalui HTTPS (atau localhost untuk pengujian). Membuka index.html langsung dari WhatsApp/Files tidak mengaktifkan instalasi PWA maupun service worker.

CARA PUBLISH PALING MUDAH: GITHUB PAGES
1. Buat repository GitHub baru, misalnya fit-health-tracker.
2. Upload seluruh ISI folder paket ini ke root repository. Pastikan index.html berada langsung di root.
3. Buka Settings > Pages.
4. Pada Build and deployment, pilih Deploy from a branch.
5. Pilih branch main dan folder /(root), lalu Save.
6. Tunggu sampai GitHub Pages memberi alamat HTTPS.

CARA PASANG DI IPHONE
1. Buka alamat HTTPS aplikasi menggunakan Safari.
2. Tekan tombol Share.
3. Pilih Add to Home Screen.
4. Pastikan opsi Open as Web App aktif jika ditampilkan, lalu tekan Add.
5. Buka aplikasi dari ikon Fit Health di Home Screen.

CARA PASANG DI ANDROID
1. Buka alamat HTTPS menggunakan Chrome.
2. Tekan menu titik tiga.
3. Pilih Install app atau Add to Home screen.
4. Ikuti konfirmasi pemasangan.

DATA & PRIVASI
- Data aplikasi masih memakai localStorage browser/perangkat.
- Tidak ada sinkronisasi otomatis antarperangkat.
- Backup JSON tetap tersedia di menu Pengaturan.
- Cache offline menyimpan file aplikasi, bukan menyinkronkan data.
- Jika data browser dihapus, data aplikasi lokal dapat ikut hilang. Ekspor backup secara berkala.
- Password aplikasi tetap merupakan kunci sederhana, bukan enkripsi.
