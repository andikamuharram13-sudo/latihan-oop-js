/*Soal 1 - Encapsulation*/
class DompetDigital {
  namaPemilik;

  #pin;
  #saldo;

  constructor (namaPemilik, pinAwal, saldoAwal) {
    this.namaPemilik = namaPemilik;
    this.#pin = pinAwal;
    this.#saldo = saldoAwal;
  }

  tarikSaldo(inputPin, nominal) {
    if (inputPin !== this.#pin) {
      return 'PIN salah, transaksi ditolak!';
    }

    if (nominal > this.#saldo) {
      return 'Uang kurang, transaksi ditolak!';
    }

    this.#saldo = this.#saldo - nominal;
    return `Berhasil mengambil Rp${nominal}! Sisa saldo: Rp${this.#saldo}`;
  }
}

const dompetGweh = new DompetDigital('Davin', 12345, 100000);

console.log(dompetGweh.tarikSaldo(12345, 50000));


/*Soal 2 - ]Inheritance*/
class User {
  constructor (username) {
    this.username = username;
  }

  login() {
    console.log(`${this.username} berhasil login!`);
  }
}

  class Admin extends User {
    constructor (username, levelAkses) {
      super(username);
      this.levelAkses = levelAkses;
    }

    hapusUser(namaUser) {
      console.log(`${this.username} ${this.levelAkses} menghapus akun ${namaUser}`);
    }
  }

  const user1 = new User('Davin');
  user1.login();

  const admin1 = new Admin('Bagas', 'HighAdmin');
  admin1.login();
  admin1.hapusUser('Davin');


  /*Soal 3 - Polymorphism*/
  class Notifikasi {
    kirim(pesan) {
      console.log(`Mengirim notifikasi: ${pesan}`);
    }
  }

  class NotifikasiEmail extends Notifikasi {
    kirim(pesan) {
      console.log(`📩[Email] Mengirim pesan ke inbox: ${pesan}`);
    }
  }

  class NotifikasiWhatsApp extends Notifikasi {
    kirim(pesan) {
      console.log(`📃[WhatsApp] Mengirim chat: ${pesan}`);
    }
  }

  const daftarNotif = [
    new Notifikasi(),
    new NotifikasiEmail(),
    new NotifikasiWhatsApp()
  ];

  for (const notif of daftarNotif) {
    notif.kirim('Tugas OOP dah selesai ni bang');
  }


  /*Soal 4 - Abstraction*/
  class MesinKopi {
    constructor (jenisKopi) {
      this.jenisKopi = jenisKopi;
    }

    #panaskanAir() {
      console.log('Air sedang dipanaskan boskuh...');
    }

    #gilingKopi() {
      console.log(`Sedang menggiling biji kopi ${this.jenisKopi}...`);
    }

    buatKopi() {
      this.#panaskanAir();
      this.#gilingKopi();
      console.log(`Kopi ${this.jenisKopi} siap diminum!`);
    }
  }

  const mesinKu = new MesinKopi('Arabika');
  mesinKu.buatKopi();

