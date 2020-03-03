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
// // tag `string text baris ${expression}`




/* Latihan */
// menampilkan data array menggunakan HTML Fragment dengan teknik looping
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

// menampilkan data menggunakan HTML Fragment dengan conditionals (ternary)
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

// menampilkan data menggunakan HTML Fragment bersarang (Nested)
// blm