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
function Mahasiswa(nama, energi) {
    let mahasiswa = {}; //dekralasi variable
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log('halo ' + this.nama + ', Selamat Makan!');
    }

    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log('halo ' + this.nama + ', Selamat Bermain!');
    }

    return mahasiswa;
}

let apip = Mahasiswa('apip', 10);
let aah = Mahasiswa('aah', 5);


/* Constructor Function */ // keyword New
function MahasiswaBaru(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log('halo ' + this.nama + ', Selamat Makan!');
    }

    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log('halo ' + this.nama + ', Selamat Bermain!');
    }
}

let apipK = new MahasiswaBaru('apip', 10);
let aahS = new MahasiswaBaru('aah', 5);


/* Object.Create */