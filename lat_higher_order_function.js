/* kerjakanTugas adalah Higher Order Function */
/* selesai adalah callback */
// function kerjakanTugas(mataKuliah, selesai) {
//     console.log('Mulai mengerjakan tugas ' + mataKuliah + ' ....');
//     selesai();
// }

// function selesai() {
//     alert('Selesai mengerjakan tugas!');
// }
// kerjakanTugas('Pemrograman Web', selesai);



/* contoh higher order function */
/* Array.prototype.map() */
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
/* mencari angka >= 3 menggunakan for*/
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) newAngka.push(angka[i]);
}
console.log('hasil_For : ', newAngka);
/* mencari angka >= 3 menggunakan forEach*/
const newAngka1 = [];
angka.forEach(element => {
    if (element >= 3) newAngka1.push(element);
});
console.log('hasil_ForEach : ', newAngka1);
/* mencari angka >= 3 menggunakan filter*/
const newAngka2 = angka.filter(el => el >= 3);
console.log('hasil_filter : ', newAngka2);

/* Array.prototype.filter() */
/* kalikan semua angka dengan 2 menggunakan map*/
const newAngka3 = angka.map(el => el * 2);
console.log('hasil_map : ', newAngka3);

/* Array.prototype.reduce() */
/* Jumlahkan seluruh angka */
const newAngka4 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('hasil_reduce : ', newAngka4);

/* penggunaan method chaining */
/* cari angka > 5, lalu kalikan 3, kemudian jumlahkan */
const hasil = angka.filter(el => el > 5)
    .map(el => el * 3)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('hasil_chaining : ', hasil);