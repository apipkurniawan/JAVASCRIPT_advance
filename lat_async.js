//* synchronous callback 
//! contoh 1 
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }
// tampilkanPesan(halo);

//! contoh 2 
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

//! contoh 3 
// const mhs = [{
//     "nama": "apip kurniawan",
//     "nrp": "0829221",
//     "email": "apipkurniawan92@gmail.com",
//     "jurusan": "teknik informatika",
//     "idDosen": 1
// }, {
//     "nama": "dadan ramdhan",
//     "nrp": "0829928",
//     "email": "dadanramdhan@gmail.com",
//     "jurusan": "akuntasi",
//     "idDosen": 2
// }, {
//     "nama": "aah",
//     "nrp": "0333221",
//     "email": "aah@gmail.com",
//     "jurusan": "marketing",
//     "idDosen": 3
// }]

// console.log('mulai');
// mhs.forEach(m => {
//     console.log(m.nama);
// });
// console.log('selesai');



//* Asynchronous callback 
//! contoh 1 use vanilla javascript 
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');

//! contoh 2 use jquery
// console.log('mulai');
// $.ajax({
//     url: 'data/mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// });
// console.log('selesai');




//* latihan callback with study case 
// todo ----