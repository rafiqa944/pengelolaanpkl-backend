import { Controller, Get, Post, Body } from '@nestjs/common';
import { LaporanPklService } from './laporan-pkl.service';
import { LaporanPKL } from '../entities/laporan-pkl.entity';

@Controller('laporan-pkl')
export class LaporanPklController {
  constructor(private readonly service: LaporanPklService) {}

  @Get()
  findAll(): Promise<LaporanPKL[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: Partial<LaporanPKL>): Promise<LaporanPKL> {
    return this.service.create(body);
  }
}
