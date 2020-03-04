/* Array */
// const val = ['apip', 'nina', 'dian'];
/* for() */
// for (let i = 0; i < val.length; i++) {
//     console.log(val[i]);
// }
/* for..of */
// for (const iterator of val) {
//     console.log(iterator);
// }
/* forEach */
// val.forEach(element => {
//     console.log(element);
// });
/* for..in */
// for (const key in val) {
//     if (val.hasOwnProperty(key)) {
//         console.log(val[key]);
//     }
// }

/* String */
// const nama = 'kurniawan';
/* for() */
// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i])
// }
/* for..of */
// for (const iterator of nama) {
//     console.log(iterator);
// }
/* forEach */
// ---tidak bisa---
/* for..in */
// for (const key in nama) {
//     if (nama.hasOwnProperty(key)) {
//         console.log(nama[key]);
//     }
// }

/* NodeList */
// const nama = document.querySelectorAll('.nama');
/* for() */
// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i].textContent);
// }
/* for..of */
// for (const el of nama) {
//     console.log(el.textContent);
// }
/* forEach */
// nama.forEach(el => {
//     console.log(el.textContent);
// });
/* for..in */
// for (const key in nama) {
//     if (nama.hasOwnProperty(key)) {
//         console.log(nama[key].textContent);
//     }
// }

/* Arguments */
// const array = [1, 2, 3, 4, 5];
// function jumlahkanAngka() {
//     // console.log('arguments : ', arguments);
//     // console.log('array : ', array);
//     /* for() */
//     // --tidak bisa untuk arguments
//     /* forEach */
//     // --tidak bisa untuk arguments
//     /* for..of */
//     let jml = 0;
//     for (const a of arguments) {
//         jml += a;
//     }
//     return jml;
//     /* for..in */
//     let jml = 0;
//     for (const key in arguments) {
//         if (arguments.hasOwnProperty(key)) {
//             jml += arguments[key];
//         }
//     }
//     return jml;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

/* Object */
const mhs = {
    nama: 'apip kurniawan',
    umur: 27,
    alamat: 'jakarta'
}
/* for() */
// --tidak bisa untuk object
/* forEach */
// --tidak bisa untuk object
/* for..of */
// --tidak bisa untuk object
/* for..in */
for (const key in mhs) {
    if (mhs.hasOwnProperty(key)) {
        console.log('object : ', mhs);
        console.log('property : ', key);
        console.log('value : ', mhs[key]);
    }
}



/* case 1 (use 2 params) */
// const val = ['apip', 'nina', 'dian'];
/* for() */
// for (let i = 0; i < val.length; i++) {
//     console.log(`${val[i]} adalah mahasiswa ke-${i + 1}`)
// }
/* for..of */
// for (const [i, el] of val.entries()) {
//     console.log(`${el} adalah mahasiswa ke-${i + 1}`);
// }
/* forEach */
// val.forEach((el, i) => {
//     console.log(`${el} adalah mahasiswa ke-${i + 1}`);
// });