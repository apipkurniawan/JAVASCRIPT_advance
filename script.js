/* Object Literal */ // tidak efektif untuk membuat objet yang banyak
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
    let mahasiswa = {}; // dekralasi variable
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



/* Constructor Function */ // menggunakan keyword New
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

// let apipK = new MahasiswaBaru('apip', 10);
// let aahS = new MahasiswaBaru('aah', 5);



/* Object.Create */ // lebih efektif
const methodMahasiswa = {
    minum: function (liter) {
        this.energy += liter;
        console.log('halo ' + this.name + ', Selamat Minum!');
    },
    olahraga: function (jam) {
        this.energy -= jam;
        console.log('halo ' + this.name + ', Selamat Berolahraga!');
    },
    tidur: function (jam) {
        this.energy += jam * 2;
        console.log('halo ' + this.name + ', Selamat Tidur!');
    }
}

function MahasiswaLama(name, energy) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.name = name;
    mahasiswa.energy = energy;

    return mahasiswa;
}

let apip_kurniawan = MahasiswaLama('apip', 10);
let aah_siti_robiah = MahasiswaLama('aah', 5);