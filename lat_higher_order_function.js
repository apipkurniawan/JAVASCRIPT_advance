/* kerjakanTugas adalah Higher Order Function */
/* selesai adalah callback */
function kerjakanTugas(mataKuliah, selesai) {
    console.log('Mulai mengerjakan tugas ' + mataKuliah + ' ....');
    selesai();
}

function selesai() {
    alert('Selesai mengerjakan tugas!');
}

kerjakanTugas('Pemrograman Web', selesai);