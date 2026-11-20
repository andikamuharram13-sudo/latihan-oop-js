// ==========================================
// 1. CLASS INDUK: Encapsulation & Abstraction
// ==========================================
class Pegawai {
  nama;
  #gajiPokok;

  constructor (nama, gajiPokokAwal) {
    this.nama = nama;
    this.#gajiPokok = gajiPokokAwal;
  }

  // ENCAPSULATION: Getter & Setter dengan validasi
  lihatGajiPokok() {
    return this.#gajiPokok;
  }

  ubahGajiPokok(nominalBaru) {
    if (nominalBaru <= 0) {
      console.log('Gagal: Gaji tidak valid!');
    } else if (nominalBaru > 0) {
      this.#gajiPokok = nominalBaru;
    }
  }

  // ABSTRACTION: Sembunyikan rumus pajak di method private
  #hitungPotonganPajak() {
    return this.#gajiPokok * 0.05;
  }

  hitungGajiBersih() {
    return this.#gajiPokok - this.#hitungPotonganPajak();
  }

  infoKerja() {
    return `${this.nama} sedang bekerja di kantor.`;
  }
}

// ==========================================
// 2. CLASS ANAK 1: Inheritance & Polymorphism
// ==========================================
class Programmer extends Pegawai {
  constructor (nama, gajiPokokAwal, bahasaPemrograman) {
    super(nama, gajiPokokAwal);
    this.bahasaPemrograman = bahasaPemrograman;
  }

  // POLYMORPHISM: Timpa method infoKerja()
  infoKerja() {
    return `👨‍💻 ${this.nama} sedang menulis kode menggunakan ${this.bahasaPemrograman}.`;
  }
}

// ==========================================
// 3. CLASS ANAK 2: Inheritance & Polymorphism
// ==========================================
class Designer extends Pegawai {
  constructor (nama, gajiPokokAwal, toolsDesain) {
    super(nama, gajiPokokAwal);
    this.toolsDesain = toolsDesain;
  }

  // POLYMORPHISM: Timpa method infoKerja()
  infoKerja() {
    return `🎨 ${this.nama} sedang merancang antarmuka menggunakan ${this.toolsDesain}.`;
  }
}

// ==========================================
// PENGUJIAN PROGRAM (JANGAN UBAH BAGIAN INI)
// ==========================================
const dev1 = new Programmer("Andi", 10000000, "JavaScript");
const ui1 = new Designer("Siti", 8000000, "Figma");

console.log(dev1.infoKerja());
console.log(`Gaji Bersih ${dev1.nama}: Rp${dev1.hitungGajiBersih()}`);

console.log(ui1.infoKerja());
ui1.ubahGajiPokok(-5000);   // Harus ditolak karena bernilai negatif
ui1.ubahGajiPokok(9000000); // Berhasil menaikkan gaji pokok
console.log(`Gaji Bersih ${ui1.nama} setelah naik: Rp${ui1.hitungGajiBersih()}`);