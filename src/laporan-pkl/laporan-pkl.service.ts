import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaporanPKL } from '../entities/laporan-pkl.entity';

@Injectable()
export class LaporanPklService {
  constructor(
    @InjectRepository(LaporanPKL)
    private repo: Repository<LaporanPKL>,
  ) {}

  findAll(): Promise<LaporanPKL[]> {
    return this.repo.find();
  }

  create(data: Partial<LaporanPKL>): Promise<LaporanPKL> {
    const newData = this.repo.create(data);
    return this.repo.save(newData);
  }
}
