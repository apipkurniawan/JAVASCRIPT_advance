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


/* latihan */
// todo ---------