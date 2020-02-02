/* Object Literal */
let mahasiswa1 = {
    nama: 'apip',
    energy: 10,
    makan: function (porsi) {
        this.energy = this.energy + porsi;
        console.log('halo ' + this.nama + ', Selamat Makan!');
    }
}

let mahasiswa2 = {
    nama: 'aah',
    energy: 5,
    makan: function (porsi) {
        this.energy = this.energy + porsi;
        console.log('halo ' + this.nama + ', Selamat Makan!');
    }
}

/* Function Declaration */


/* Constructor Function */


/* Object.Create */