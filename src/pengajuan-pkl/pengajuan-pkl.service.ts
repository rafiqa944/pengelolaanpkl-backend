import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PengajuanPKL } from '../entities/pengajuan-pkl.entity';

@Injectable()
export class PengajuanPklService {
  constructor(
    @InjectRepository(PengajuanPKL)
    private repo: Repository<PengajuanPKL>,
  ) {}

  findAll(): Promise<PengajuanPKL[]> {
    return this.repo.find(); 
  }

  create(data: Partial<PengajuanPKL>): Promise<PengajuanPKL> {
    const newData = this.repo.create(data);
    return this.repo.save(newData);
  }
}
