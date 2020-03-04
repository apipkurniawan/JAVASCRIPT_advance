/* Destructuring array */

// const perkenalan = ['hello', 'nama', 'saya', 'apip'];
// const [salam, satu, dua, nama] = perkenalan;
// console.log('nama : ', nama);

/* skipping items */
// const [salam, , , nama] = perkenalan;
// console.log('nama : ', nama);

/* swap items (ubah) */
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log('a : ', a);
// console.log('b : ', b);

/* return value pada function */
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(b);

/* rest parameter */
// const [a, ...args] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a);
// console.log(args[1]);




/* Destructuring object (catatan : nama variable harus sama dengan nama property (nama == nama)) */
// const mhs = {
//     nama: 'apip kurniawan',
//     umur: 27
// }
// const {
//     nama,
//     umur
// } = mhs;
// console.log(nama);

/* Assigment tanpa deklarasi object */
// ({
//     nama,
//     umur
// } = {
//     nama: 'apip kurniawan',
//     umur: 27
// });
// console.log(nama);

/* Assigment ke variable baru */
// const mhs = {
//     nama: 'apip kurniawan',
//     umur: 27
// }
// const {
//     nama: n,
//     umur: u
// } = mhs;
// console.log(n);

/* Memberikan Default value */
// const mhs = {
//     nama: 'apip kurniawan',
//     umur: 27,
//     lokasi: 'kuningan'
// }
// const {
//     nama,
//     umur,
//     lokasi = 'jakarta'
// } = mhs;
// console.log(lokasi);

/* Rest Parameter */
// const mhs = {
//     nama: 'apip kurniawan',
//     umur: 27,
//     lokasi: 'kuningan'
// }
// const {
//     nama,
//     ...args
// } = mhs;
// console.log(args);
// console.log(args.lokasi);

/* Mengambil field pada object, setelah dikirim sebagai parameter untuk function */
// const mhs = {
//     nama: 'apip kurniawan',
//     umur: 27,
//     lokasi: 'kuningan'
// }
// /* cara 1 (mengambil seluruh property ditampug diparameter) */
// function getIdMhs(param) {
//     return param.umur;
// }
// /* cara 2 (mengambil nama property,nama parameter adalah nama property yg diambil) */
// function getIdMhs({
//     umur
// }) {
//     return umur;
// }
// console.log(getIdMhs(mhs));




/* Destructurig Function */

/* Destructurig Function Return Value */
/* contoh 1 (return array) : */
// function kalkulasi(a, b) {
//     return [a + b, a * b, a - b, a / b];
// }
// const [tambah, kali, kurang, bagi] = kalkulasi(3, 2);
// console.log(tambah);
// console.log(kurang);
/* contoh 2 (return object) : */
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kali: a * b,
//         kurang: a - b,
//         bagi: a / b
//     };
// }
// const {
//     kali,
//     bagi,
//     kurang,
//     tambah,
// } = kalkulasi(3, 2);
// console.log(tambah);
// console.log(kurang);

/* Destructurig Function Arguments */
/* contoh 1 (tanpa destructuring) */
// const mhs1 = {
//     nama: 'apip kurniawan',
//     umur: 27,
//     lokasi: 'kuningan'
// }
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`;
// }
// console.log(cetakMhs(mhs1));
/* contoh 1 (menggunakan destructuring) */
// const mhs1 = {
//     nama: 'apip kurniawan',
//     umur: 27,
//     lokasi: 'kuningan'
// }
// function cetakMhs({
//     nama,
//     umur
// }) {
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1));
/* contoh 2 */
const mhs2 = {
    nama: 'apip kurniawan',
    umur: 27,
    lokasi: 'kuningan',
    nilai: {
        uas: 70,
        uts: 80
    }
}

function cetakMhs({
    nama,
    umur,
    nilai: {
        uas,
        uts
    }
}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai Uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs2));