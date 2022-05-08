// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const data = [
  {
    id: 1,
    title: "Abdi Health Medical",
    category: "Mobile Application",
    description: "Abdi Health merupakan aplikasi untuk membantu dokter untuk mengolah data pasien yang ada di rumah sakitnya. Aplikasi ini dibuat dengan React Native dan Laravel",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651971017/portofolio/abdi_health_pnnuwx.png"
  },
  {
    id: 2,
    title: "Absensi Setda Tasikmalaya",
    category: "Mobile Application",
    description: "Absensi Setda Tasikmalaya merupakan aplikasi untuk mengolah data absensi setda tasikmalaya. Memiliki fitur deteksi fake gps agar pegawai tidak melakukan kecurangan",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651971179/portofolio/absensi_setda_qoxbeb.png"
  },
  {
    id: 3,
    title: "Kasadaya",
    category: "Mobile Application",
    description: "Kasadaya adalah aplikasi untuk masyarakat melakukan pengepulan minyak jelantah di kasadaya. Aplikasi ini dibuat dengan React Native dan Laravel",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651971268/portofolio/kasadaya_obk8ht.png"
  },
  {
    id: 4,
    title: "Abdi POS (Point of Sale)",
    category: "Mobile Application",
    description: "Abdi POS merupakan aplikasi untuk membantu penjualan obat di rumah sakit. Aplikasi ini terintegrasi dengan abdi health untuk melakukan pembayaran pasien dan juga terdapat fitur untuk print struk dan cetak invoice",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651971578/portofolio/abdi_pos_yhdsfj.png"
  },
  {
    id: 5,
    title: "Al Luthfi (Point of Sale)",
    category: "Mobile Application",
    description: "Al Luthfi adalah aplikasi yang digunakan oleh sales al luthfi untuk melakukan transaksi penjualan pakaian muslim, terdapat fitur laporan yang penjualan barang, hutang customer dan juga statistik penjualan yang membantu untuk kinerja perusahaan",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651971838/portofolio/alluthfi_fcekmf.png"
  },
  {
    id: 6,
    title: "SPBU Integration Report (SIR)",
    category: "Mobile Application",
    description: "Aplikasi SPBU ini dibuat untuk membantu untuk melakukan laporan management bensin dan gas. Aplikasi ini dibuat dengan React Native dan Laravel",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651972388/portofolio/sistem_integration_report_i0xlml.png"
  },
  {
    id: 7,
    title: "Sadesa Desa Sukasukur",
    category: "Web Design",
    description: "Website desa sukasukur yang terintegrasi dengan aplikasi sadesa, website ini menampilkan informasi mengenai desa sukasukur",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651974235/portofolio/sadesa_web_yn3ekl.png"
  },
  {
    id: 8,
    title: "Bumdes Sadesa (E-Commerce)",
    category: "Web Design",
    description: "Bumdes sadesa merupakan sebuah e-commerce untuk masyarakat desa yang memiliki bisnis yang berhubungan dengan kegiatan desa. e-commerce ini sudah di lengkapi dengan fitur pembayaran dengan midtrans",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651974508/portofolio/bumdes_gwscrk.png"
  },
  {
    id: 9,
    title: "Gallery Arrasyida",
    category: "Web Design",
    description: "Gallery Arrasyida adalah katalog untuk menampilkan produk yang di jual oleh seller untuk keperluan facebook ads dll, dengan fitur yang sangat sederhana memudahkan customer untuk membeli melalu WA tanpa perlu melakukan login",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651974810/portofolio/arrasyda_b2f50c.png"
  },
  {
    id: 10,
    title: "Arsip Surat Setda Ciamis",
    category: "Web Application",
    description: "Aplikasi arsip surat yang digunakan oleh setda ciamis untuk mengus surat yang ada di kantor. aplikasi ini dibuat menggunakan laravel",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651975181/portofolio/SIK_cetmdz.png"
  },
  {
    id: 11,
    title: "Sadesa Mobile",
    category: "Mobile Application",
    description: "Sadesa mobile digunakan oleh masyarakat untuk melihat berita tentang desa mereka dan juga melakukan pengajuan surat di desa tanpa perlu mengantri di kantor desa",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651975439/portofolio/sadesa_moble_e2wubn.png"
  },
  {
    id: 12,
    title: "Website Sekolah PPI7 Cempaka Warna",
    category: "Web Design",
    description: "Web PPI7 Cempaka Warna dibuat untuk menampilkan informasi tentang sekolah tersebut dan juga telah dilengkapi dengan PPDB online juga",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651975681/portofolio/web_sekolah_d8n4iw.png"
  },
  {
    id: 13,
    title: "Sadesa App",
    category: "Web Application",
    description: "Sadesa App ini merupakan aplikasi yang menjadi inti dari ekosistem sadesa, terdapat management penduduk, grafik berdasarkan surat dibuat untuk analisa keperluan desa dan masih banyak lagi",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651976194/portofolio/sadesa_app_mcpm6z.png"
  },
  {
    id: 14,
    title: "Lapak Pede",
    category: "Web Application",
    description: "Lapak pede adalah aplikasi toko online sederhana digunakan untuk menjual produk khusunya sembako",
    img: "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1651976750/portofolio/lapakpede_uugcno.png"
  }
]

export default function handler(req, res) {
  res.status(200).json(data)
}
