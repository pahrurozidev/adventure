// Semua data perjalanan ada di file ini.
//
// Cara mengisi:
// - `date`  : tanggal berkunjung, format 'YYYY-MM-DD'. Isi `null` jika belum dikunjungi
//             → kartu otomatis tampil sebagai "Coming soon" dan tidak bisa diklik.
// - `cover` : foto sampul kartu.
// - `photos`: daftar foto di halaman detail. `caption` boleh dikosongkan.
// - Foto milikmu sendiri: taruh di folder public/photos/<slug>/ lalu tulis path-nya
//   seperti 'photos/bukit-gedong/01.jpg' (tanpa garis miring di depan).
//   URL lengkap (https://...) juga bisa dipakai.
// - `coords`: [lintang, bujur] titik lokasi untuk peta di halaman detail. Isi `null` jika belum diketahui.
//
// CATATAN: foto & tanggal di bawah masih CONTOH (placeholder). Ganti dengan milikmu.

export const site = {
  owner: 'Langkah',
  since: 2024,
}

const sembalun = { id: 'Sembalun, Lombok Timur', en: 'Sembalun, East Lombok' }

// Urutan kartu = urutan di array ini. `elevation` dalam meter di atas permukaan laut (mdpl).
export const summits = [
  { slug: 'gunung-rinjani', name: 'Gunung Rinjani', elevation: 3726, date: null, location: sembalun, coords: [-8.4117, 116.4581] },
  { slug: 'bukit-sempana', name: 'Bukit Sempana', elevation: 2329, date: null, location: sembalun, coords: [-8.4191, 116.5714] },
  {
    slug: 'bukit-gedong',
    name: 'Bukit Lembah Gedong',
    elevation: 2200,
    date: '2026-09-13',
    location: sembalun,
    coords: [-8.4130, 116.5160],
    cover: 'photos/bukit-gedong/01.jpeg',
    story: {
      id: 'Bukit pertama dari tujuh. Jalurnya pendek tapi menanjak, dan dari atas lembah Sembalun terbentang seperti permadani hijau.',
      en: 'The first of seven. A short but steep trail, and from the top the Sembalun valley unfolds like a green carpet.',
    },
    photos: [
      { src: 'photos/bukit-gedong/01.jpeg', caption: { id: 'Merah Putih di Puncak Bukit Gedong, 2200 mdpl', en: 'The red and white flag on the Bukit Gedong summit, 2,200 m' } },
      { src: 'photos/bukit-gedong/02.jpeg', caption: { id: 'Bersama tim di papan puncak', en: 'With the team at the summit sign' } },
      { src: 'photos/bukit-gedong/03.jpeg', caption: { id: 'Merayakan tiba di puncak', en: 'Celebrating at the top' } },
      { src: 'photos/bukit-gedong/04.jpeg', caption: { id: 'Memandang Gunung Rinjani dari punggungan', en: 'Looking out at Mount Rinjani from the ridge' } },
      { src: 'photos/bukit-gedong/05.jpeg', caption: { id: 'Menuruni jalur yang berdebu', en: 'Heading down the dusty trail' } },
      { src: 'photos/bukit-gedong/06.jpeg', caption: { id: 'Penanda TOP 2200 mdpl berlatar Rinjani', en: 'The 2,200 m TOP marker with Rinjani behind' } },
    ],
  },
  { slug: 'bukit-kondo', name: 'Bukit Kondo', elevation: 1937, date: null, location: sembalun, coords: [-8.4352, 116.5169] },
  { slug: 'bukit-anak-dara', name: 'Bukit Anak Dara', elevation: 1923, date: null, location: sembalun, coords: [-8.3640, 116.5606] },
  {
    slug: 'bukit-pergasingan',
    name: 'Bukit Pergasingan',
    elevation: 1806,
    date: '2026-07-19',
    location: sembalun,
    coords: [-8.34294, 116.54067],
    cover: 'photos/bukit-pergasingan/01.jpeg',
    story: {
      id: 'Camp semalam di punggungan, menunggu matahari terbit di atas petak-petak sawah Sembalun dengan Rinjani berdiri di belakang.',
      en: 'A night camped on the ridge, waiting for sunrise over the patchwork fields of Sembalun with Rinjani standing behind.',
    },
    photos: [
      { src: 'photos/bukit-pergasingan/01.jpeg', caption: { id: 'Bersama tim di Puncak Pergasingan, 1806 mdpl', en: 'With the team on the Pergasingan summit, 1,806 m' } },
      { src: 'photos/bukit-pergasingan/02.jpeg', caption: { id: 'Awan menyelimuti Lembah Sembalun', en: 'Clouds drifting over the Sembalun valley' } },
      { src: 'photos/bukit-pergasingan/03.jpeg', caption: { id: 'Menikmati lembah dari tepi punggungan', en: 'Taking in the valley from the ridge edge' } },
      { src: 'photos/bukit-pergasingan/04.jpeg', caption: { id: 'Petak-petak ladang Sembalun saat langit cerah', en: 'The patchwork fields of Sembalun under a clear sky' } },
      { src: 'photos/bukit-pergasingan/05.jpeg', caption: { id: 'Tugu puncak di tengah kabut', en: 'The summit marker in the mist' } },
      { src: 'photos/bukit-pergasingan/06.jpeg', caption: { id: 'Menyusuri punggungan berkabut', en: 'Walking the misty ridge' } },
    ],
  },
  { slug: 'bukit-bao-ritip', name: 'Bukit Bao Ritip', elevation: 1500, date: null, location: sembalun, coords: null },
]

// Perjalanan lain di luar Seven Summit: pantai, kota, desa, gunung lain, dll.
export const journeys = [
  {
    slug: 'pantai-pink',
    name: 'Pantai Pink',
    category: { id: 'Pantai', en: 'Beach' },
    date: '2025-03-02',
    location: { id: 'Jerowaru, Lombok Timur', en: 'Jerowaru, East Lombok' },
    coords: [-8.8592, 116.5776],
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    story: {
      id: 'Pasir berwarna merah muda, air sebening kaca, dan perjalanan panjang yang terbayar lunas.',
      en: 'Pink-tinted sand, glass-clear water, and a long drive that paid for itself.',
    },
    photos: [
      { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80' },
      { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80' },
    ],
  },
  {
    slug: 'gunung-bromo',
    name: 'Gunung Bromo',
    category: { id: 'Gunung', en: 'Mountain' },
    date: '2024-09-21',
    location: { id: 'Probolinggo, Jawa Timur', en: 'Probolinggo, East Java' },
    coords: [-7.9421, 112.9530],
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    story: {
      id: 'Berangkat dini hari, menembus lautan pasir, lalu diam menyaksikan kawah yang berasap.',
      en: 'Leaving before dawn, crossing the sea of sand, then standing quietly before the smoking crater.',
    },
    photos: [
      { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80' },
      { src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80' },
    ],
  },
  {
    slug: 'ubud-bali',
    name: 'Ubud',
    category: { id: 'Kota & Desa', en: 'Town & Village' },
    date: '2024-12-28',
    location: { id: 'Gianyar, Bali', en: 'Gianyar, Bali' },
    coords: [-8.5069, 115.2625],
    cover: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
    story: {
      id: 'Pura, sawah berundak, dan pagi yang lambat di antara hujan tropis.',
      en: 'Temples, terraced fields, and slow mornings between tropical rain.',
    },
    photos: [
      { src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80' },
    ],
  },
]
