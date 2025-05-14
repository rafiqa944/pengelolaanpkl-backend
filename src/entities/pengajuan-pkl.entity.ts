import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pengajuan_pkl')
export class PengajuanPKL {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alamat_perusahaan: string;

  @Column()
  keperluan_magang: string;

  @Column()
  nama: string;

  @Column()
  nama_perusahaan: string;

  @Column()
  nama_supervisor: string;

  @Column()
  nim: string;

  @Column()
  program: string;

  @Column()
  status: string;

  @Column()
  tanggal_mulai: string;

  @Column()
  tanggal_pengajuan: string;

  @Column()
  tanggal_selesai: string;

  @Column()
  kontak_email: string;

  @Column()
  kontak_no_hp: string;
}
