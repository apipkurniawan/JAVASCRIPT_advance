// /* contoh */


// /* String Literal */
// let string = `string text baris 1`


// /* Multi-Line String */
// let multi_line = `string text baris 1
// string text baris 2
// string text baris 3`
// // tanpa string literal
// console.log('string 1 \nstring 2');
// // dengan string literal
// console.log(`string 1 
// string 2`);


// /* Embedded Expression */
// let expression = 1;
// // contoh 1
// let el = `string text baris ${expression}`;
// // contoh 2 (Expression Interpolation)
// let a = 10;
// let b = 20;
// console.log(`jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a+b}, bukan ${2*a+b}`);
// // contoh 3 (function Expression)
// console.log(`${alert('hallo.!')}`);
// // contoh 4 (ternary operator didalam Expression)
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// /* HTML Fragments */
// const mhs = {
//     nama: 'apip',
//     nrp: '212'
// }
// // before using HTML Fragment
// let before = '';
// before += '<div class="mhs">';
// before += '<h2>' + mhs.nama + '</h2>';
// before += '<span class="nrp">' + mhs.nrp + '</span>';
// before += '</div>';
// // after using HTML Fragment
// let after = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;


// /* Tagged Template */
// /* tag `string text baris ${expression}` */
/* contoh 1 (tanpa rest parameter) */
// const nama = 'apip kurniawan';
// const umur = 27;
// const alamat = 'kuningan';
// function coba(params, arg1, arg2, arg3) {
//     // return params; // untuk memecah string dengan expression sebagai pembatasnya
//     // return arg1; // untuk mengambil expression pertama
//     // return arg2; // untuk mengambil expression kedua
//     // return arg3; // untuk mengambil expression ketiga
// }
// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun. tinggal di ${alamat}`;
// console.log(str);
/* contoh 2 (using rest parameter) */
// const nama = 'apip kurniawan';
// const umur = 27;
// const alamat = 'kuningan';
// function coba(params, ...args) { // ...args adalah rest parameter
//     // return params; // untuk memecah string dengan expression sebagai pembatasnya
//     // return args; // untuk mengambil semua expression dan menangkapnya dalam bentuk array
//     /* tampilkan data cara 1 : */
//     // let result = '';
//     // params.forEach((str, i) => {
//     //     result += `${str}${args[i] || ''}`
//     // });
//     // return result;
//     /* tampilkan data cara 2 : */
//     // return params.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');
//     /* tampilkan data cara 3 dengan style : */
//     return params.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '');
// }
// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun. tinggal di ${alamat}`; // ini adalah tagged template
// // console.log(str);
// document.querySelector('.taggedTemplate').innerHTML = str;
/* contoh 3 (for escaping/sanitize HTML Tags) */ // blm tes
// const name = 'apip kurniawan';
// const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');"/>`;
// const html = sanitize `<h3>${name}</h3><p>${aboutMe}</p>`; // tagged template
// function sanitize(params, ...args) {
//     return DOMPurify.sanitize(aboutMe);
// }
// console.log(html);
/* contoh 4 (for styled components) */ // blm tes
// const title = styled.h1 `
// font-size:1.5em;
// text-align:center;
// color:red;
// `;
// console.log(title);




/* Latihan */
/* menampilkan data array menggunakan HTML Fragment dengan teknik looping */
// const data_array = [{
//         nama: 'apip kurniawan',
//         alamat: 'kuningan'
//     },
//     {
//         nama: 'tata alfian',
//         alamat: 'cirebon'
//     },
//     {
//         nama: 'dian',
//         alamat: 'jakarta'
//     }
// ];
// const el = `<div class="mhs">
// ${data_array.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.alamat}</li>
// </ul>`).join('')}
// </div>`;
// document.querySelector('.fragment').innerHTML = el;

/* menampilkan data menggunakan HTML Fragment dengan conditionals (ternary) */
// const lagu = {
//     judul: 'kau adalah',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Ray' //optional
// }
// const el2 = `<div class="lagu">
// <ul>
// <li>${lagu.judul}</li>
// <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>`
// document.querySelector('.fragment').innerHTML = el2;

/* menampilkan data menggunakan HTML Fragment bersarang (Nested) */
// const mhs = {
//     nama: 'apip',
//     semester: 4,
//     mataKuliah: [
//         'Rekayasa Web',
//         'Analisis dan Perancangan Sistem Informasi',
//         'Pemrograman Sistem Interaktif',
//         'Perancangan Sistem Berorientasi Object'
//     ]
// };
// function cetakMatKul(mataKuliah) {
//     return `
//         <ol>
//             ${mataKuliah.map(mk=> `<li>${mk}</li>`).join('')}
//         </ol>
//     `;
// }
// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester : ${mhs.semester}</span>
//     <h4>Mata Kuliah : </h4>
//     ${cetakMatKul(mhs.mataKuliah)}
//     </div>`;
// document.querySelector('.fragment').innerHTML = el;