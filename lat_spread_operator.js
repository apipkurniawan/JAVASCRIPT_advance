/* macam-macam comments : */
// matikan line
// ! pesan penting
// ? pesan pertanyaan
// todo pesan yang akan dikerjakan
// * pesan pemberitahuan



/* Spread Operator */
// * digunakan untuk memecah iterables menjadi single element
// const mhs = ['apip', 'dadan', 'tata'];
// console.log(...mhs[1]);
// * digunakan untuk menggabungkan 2 array
// const mhs = ['apip', 'dadan', 'tata'];
// const dosen = ['ade', 'hendra', 'gempa']
// ! spread operator bisa menambahkan element baru
// const orang = [...mhs, 'apip', ...dosen];
// ! concat tidak bisa menambahkan element baru
// const orangLain = mhs.concat(dosen);
// console.log(orang);
// console.log(orangLain);
// * digunakan untuk mengcopy nilai array
// const mhs = ['apip', 'dadan', 'tata'];
// console.log('array semula : ', mhs);
// ! spread operator tidak mengubah element semula
// const mhs1 = [...mhs];
// mhs1[0] = 'aah';
// console.log('array dengan spread : ', mhs1);
// console.log('array semula spread: ', mhs);
// ! tanpa spread operator bisa mengubah element semula
// const mhs2 = mhs;
// mhs2[0] = 'aah';
// console.log('array tanpa spread : ', mhs2);
// console.log('array semula tanpa spread: ', mhs);
/* latihan Spread Operator */
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;


/* Rest Parameter */
/* contoh 1 */
// * penerapan pada function
// function myFunct(...args) {
// return args; // menghasilkan array menggunakan rest parameter
// return [...arguments]; // menghasilkan array menggunakan spread operator
// return Array.from(arguments); // menghasilkan array menggunakan funct array
// }
// console.log(myFunct(1, 2, 3, 4, 5));
/* contoh 2 */
// * penerapan pada looping dan hire-order-function
// function jumlahkan(...angka) {
// return angka.reduce((a, b) => a + b); // hire-order-function
// let total = 0; // looping for..of
// for (const a of angka) {
//     total += a;
// }
// return total;
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));
/* contoh 3 */
// * penerapan pada array destructuring
// const kelompok = ['apip', 'hendra', 'ardi', 'arif', 'abi'];
// const [ketua, wakil, ...anggota] = kelompok; // array destructuring
// console.log(anggota);
/* contoh 4 */
// * penerapan pada object destructuring
// const team = {
//     pm: 'hendra',
//     frontEnd1: 'apip',
//     frontEnd2: 'abi',
//     backEnd: 'lana',
//     ux: 'adit',
//     devOps: 'rama'
// }
// const {
//     pm,
//     ...myTeam
// } = team;
// console.log(pm);
/* contoh kasus */
// * penerapan pada study kasus (filtering)
function filterBy(type, ...args) {
    return args.filter(el => typeof el == type)
}
console.log(filterBy('number', 1, 2, 'apip', false, 4, 6, true, 'dian'));