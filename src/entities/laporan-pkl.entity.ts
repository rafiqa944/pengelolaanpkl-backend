import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PengajuanPKL } from './pengajuan-pkl.entity';

@Entity('laporan_pkl')
export class LaporanPKL {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PengajuanPKL)
  @JoinColumn({ name: 'id_pengajuan' })
  pengajuan: PengajuanPKL;

  @Column()
  catatan_admin: string;

  @Column()
  status: string;

  @Column()
  tanggal_unggah: string;

  @Column()
  url_laporan: string;
}
