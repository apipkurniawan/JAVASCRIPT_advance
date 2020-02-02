// /* perbedaan Function Expression dan Function Decralation */
// /* Function Expression */
// // let tampilPesan = function (nama) {
// //     return 'halo' + nama;
// // }
// // console.log(tampilPesan('apip'));

// /* Function Decralation */
// // tampilPesan(nama) {
// //     return 'halo' + nama;
// // }
// // console.log(tampilPesan('apip'));



// /* Arrow Function */
// /* contoh 1 */
// /* implisit return */
// // let tampilPesan1 = nama => 'halo' + nama;
// // console.log(tampilPesan1('apip'));

// /* contoh 2 */
// /* dua parameter */
// // let tampilPesan2 = (nama, waktu) => {
//     // return 'halo ' + nama + ', Selamat ' + waktu
// // };
// // console.log(tampilPesan2('apip', 'Pagi'));

// /* contoh 3 */
// /* tanpa parameter */
// // let tampilPesan3 = () => 'Hello World';
// // console.log(tampilPesan3());

// /* contoh 3 */
// /* menggunakan function map untuk memetakan array */
// // let mahasiswa = ['apip kurniawan', 'dwiky', 'aah siti robiah'];
// // console.log(mahasiswa.map(nama => nama.length));
// /* menggunakan function map untuk memetakan array dengan return object*/
// // console.table(mahasiswa.map(nama => ({
// //     // nama :nama,
// //     nama,
// //     jmlHuruf: nama.length
// // })));



// /* Perbedaan context this pada arrow function*/
// /* contoh 1 */
// /* Object Literal */
// // const mhs1 = {
// //     nama: 'apip',
// //     umur: 27,
// //     sayHello: () => {
// //         console.log(this);
// //         console.log('halo, saya ' + nama + ', umur ' + umur);
// //     }
// // }

// /* contoh 2 */
// // const Mahasiswa = function () {
// //     this.nama = 'apip';
// //     this.umur = 27;
// //     this.sayHello = function () {
// //         console.log('Halo, Nama saya ' + this.nama + ', dan saya ' + umur + ' tahun');
// //     }
// //     setInterval(() => {
// //         console.log(this.umur++);
// //     }, 500);
// // }
// // const apip = new Mahasiswa(); // instansiasi


/* Penerapan Arrow function dengan study kasus */