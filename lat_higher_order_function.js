// /* kerjakanTugas adalah Higher Order Function */
// /* selesai adalah callback */
// // function kerjakanTugas(mataKuliah, selesai) {
// //     console.log('Mulai mengerjakan tugas ' + mataKuliah + ' ....');
// //     selesai();
// // }

// // function selesai() {
// //     alert('Selesai mengerjakan tugas!');
// // }
// // kerjakanTugas('Pemrograman Web', selesai);




// /* beberapa contoh sederhana higher order function */
// // const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// /* Array.prototype.map() */
// /* mencari angka >= 3 menggunakan for*/
// // const newAngka = [];
// // for (let i = 0; i < angka.length; i++) {
// // if (angka[i] >= 3) newAngka.push(angka[i]);
// // }
// // console.log('hasil_For : ', newAngka);
// /* mencari angka >= 3 menggunakan forEach*/
// // const newAngka1 = [];
// // angka.forEach(element => {
// // if (element >= 3) newAngka1.push(element);
// // });
// // console.log('hasil_ForEach : ', newAngka1);
// /* mencari angka >= 3 menggunakan filter*/
// // const newAngka2 = angka.filter(el => el >= 3);
// // console.log('hasil_filter : ', newAngka2);

// /* Array.prototype.filter() */
// /* kalikan semua angka dengan 2 menggunakan map*/
// // const newAngka3 = angka.map(el => el * 2);
// // console.log('hasil_map : ', newAngka3);

// /* Array.prototype.reduce() */
// /* Jumlahkan seluruh angka */
// // const newAngka4 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// // console.log('hasil_reduce : ', newAngka4);

// /* penggunaan method chaining */
// /* cari angka > 5, lalu kalikan 3, kemudian jumlahkan */
// // const hasil = angka.filter(el => el > 5)
// // .map(el => el * 3)
// // .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // console.log('hasil_chaining : ', hasil);




/* 
latihan higher order function dengan study kasus  :
menampilkan jumlah dan durasi video yang bertuliskan JAVASCRIPT LANJUTAN 
*/
/* 
ALGORITHM :
- ambil semua element video
- pilih hanya yang 'JAVASCRIPT LANJUTAN'
- ambil durasi masing-masing video
- ubah durasi menjadi float, lalu ubah menit menjadi detik
- jumlahkan semua detik
- ubah formtnya jadi jam menit detik
- simpan di DOM
*/
/* eksekusi */
/* ambil semua element video (masih dalam bentuk nodeList*/
const videos = document.querySelectorAll('[data-duration]');
/* ubah dari nodeList ke Array */
const array_videos = Array.from(videos);
/* ambil yang hanya 'JAVASCRIPT LANJUTAN' */
const jml_vid = array_videos.filter(element => element.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const el_jsLanjutan = array_videos.filter(element => element.textContent.includes('JAVASCRIPT LANJUTAN'))
    /* ambil durasi masing2 video */
    .map(item => item.dataset.duration)
    /* ubah durasi menjadi float */
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        /* ubah menjadi detik */
        return (parts[0] * 60) + parts[1];
    })
    /* jumlahkan semua */
    .reduce((total, detik) => total + detik);
/* ubah menjadi format jam menit detik */
const jam = Math.floor(el_jsLanjutan / 3600);
const sisa_detik = el_jsLanjutan - (3600 * jam);
const menit = Math.floor(sisa_detik / 60);
const detik = sisa_detik - (menit * 60);
/* simpan di DOM */
const pDurasi = document.querySelector('.total-durasi');
const pJmlVideo = document.querySelector('.jumlah-video');
pDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik`;
pJmlVideo.textContent = `${jml_vid}`;