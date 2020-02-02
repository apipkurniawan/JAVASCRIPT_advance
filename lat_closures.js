// console.log(sayHello());
// var nama = 'apip';
// var umur = 27;
// console.log(sayHello());
// console.log(sayHello);
// function sayHello() {
//     return 'hello ' + nama + ' selamat ulang tahun yang ke ' + umur;
// }



/* code untuk belajar mengetahui hoisting/cara javascript mengeksekusi sebuah code dengan javascript visualizer */
/* contoh pertama */
// var nama = 'apip';
// var username = '@apip_kurniawan';
// function cetakUrl(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }
// console.log(cetakUrl(username));

/* contoh kedua */
// function a() {
//     console.log('ini a');
//     function b() {
//         console.log('ini b');
//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();

/* contoh ketiga */ // scope
// var nama = 'apip';
// var username = '@apip_kurniawan';
// function cetakUrl() {
//     console.log(arguments);
//     console.log(arguments[0]);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }
// console.log(cetakUrl('@aahSitiRobiah', '@dadan'));

/* latihan hoisting */ // tebak outputnya seperti apa?
// function satu() {
//     var nama = 'apip';
//     console.log(nama);
// }
// function dua() {
//     console.log(nama);
// }
// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('dody');
// console.log(nama);



/* Penerapan Closures */ // function factories
/* Lexical scope */
// function init() { // lexical scope
//     var nama = 'apip'; // local variable
//     function tampilNama() { // inner function (closure*)
//         console.log(nama); // akses ke parent variable
//     }
//     console.dir(tampilNama); // untuk melihat closure
// }
// init();

/* closure */
/* contoh 1 */
// function init() {
//     /* cara 1 */
//     // function tampilNama(nama) { // inner function (closure*)
//     //     console.log(nama);
//     // }
//     // return tampilNama;
//     /* cara 2 */
//     return function (nama) { // inner function (closure*)
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('apip');
// panggilNama('kurninawan');

/* contoh 2 */
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log('Halo ' + nama + ', Selamat ' + waktu + ', Semoga harimu menyenangkan!');;
//     }
// }
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');
// selamatPagi('Apip');
// selamatMalam('Aaah');

/* contoh 3 */
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();
console.log(add());
console.log(add());
console.log(add());