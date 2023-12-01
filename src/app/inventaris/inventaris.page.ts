import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inventaris',
  templateUrl: './inventaris.page.html',
  styleUrls: ['./inventaris.page.scss'],
})
export class InventarisPage implements OnInit {
  inventaris: any = [];
  modal_tambah = false;
  modal_edit = false;
  id: any;
  nama: any;
  deskripsi: any;
  jumlah: any;
  tanggal_beli: any;
  kondisi: any;
  user_id: any = 1;

  constructor(public _apiService: ApiService, private modal: ModalController) { }

  ngOnInit() {
    this.getInventaris();
  }
  getInventaris() {
    let id = 1;
    this._apiService.tampil(id, 'tampil.php?user_id=').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.inventaris = res;
        console.log(this.id)
      },
      error: (err: any) => {
        console.log(err);
      },
    })
  }
  reset_model() {
    this.id = null;
    this.nama = '';
    this.deskripsi = '';
    this.jumlah = '';
    this.tanggal_beli = '';
    this.kondisi = '';
    this.user_id = '';
  }
  open_modal_tambah(isOpen: boolean) {
    this.modal_tambah = isOpen;
    this.reset_model();
    this.modal_tambah = true;
    this.modal_edit = false;
  }
  open_modal_edit(isOpen: boolean, idget: any) {
    this.modal_edit = isOpen;
    this.id = idget;
    console.log(this.id);
    this.getInventarisId(this.id);
    this.modal_tambah = false;
    this.modal_edit = true;
  }
  cancel() {
    this.modal.dismiss();
    this.modal_tambah = false;
    this.modal_edit = false;
    this.reset_model();
  }
  addInventaris() {
    if (this.nama != '' && this.deskripsi != '' && this.jumlah != '') {
      let data = {
        nama: this.nama,
        deskripsi: this.deskripsi,
        jumlah: this.jumlah,
        tanggal_beli: this.tanggal_beli,
        kondisi: this.kondisi,
        user_id: 1
      };
      console.log(data);

      this._apiService.tambah(data, '/tambah.php').subscribe({
        next: (hasil: any) => {
          this.reset_model();
          console.log('berhasil tambah inventaris');
          this.getInventaris();
          this.modal_tambah = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.error('gagal tambah inventaris', err);
        },
      });
    } else {
      console.log('gagal tambah inventaris karena masih ada data yg kosong');
    }
  }



  delInventaris(id: any) {
    this._apiService.hapus(id, '/hapus.php?id=').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.getInventaris();
        console.log('berhasil hapus data');
      },
      error: (error: any) => {
        console.log('gagal');
      }
    })
  }
  getInventarisId(id: any) {
    this._apiService.lihat(id,
      '/lihat.php?id=').subscribe({
        next: (hasil: any) => {
          console.log('sukses', hasil);
          let inventaris = hasil;
          this.id = inventaris.id;
          this.nama = inventaris.nama;
          this.deskripsi = inventaris.deskripsi;
          this.jumlah = inventaris.jumlah
          this.tanggal_beli = inventaris.tanggal_beli;
          this.kondisi = inventaris.kondisi;
          this.user_id = inventaris.user_id;
        },
        error: (error: any) => {
          console.log('gagal ambil data');
        }
      })
  }
  editInventaris() {
    let data = {
      id: this.id,
      nama: this.nama,
      deskripsi: this.deskripsi,
      jumlah: this.jumlah,
      tanggal_beli: this.tanggal_beli,
      kondisi: this.kondisi,
      user_id: this.user_id
    };

    this._apiService.edit(data, '/edit.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.reset_model();
        this.getInventaris();
        console.log('berhasil edit inventaris');
        this.modal_edit = false;
        this.modal.dismiss();
      },
      error: (err: any) => {
        console.error('gagal edit inventaris', err);
      },
    });
  }

}
