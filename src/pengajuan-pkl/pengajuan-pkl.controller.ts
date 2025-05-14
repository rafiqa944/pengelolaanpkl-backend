import { Controller, Get, Post, Body } from '@nestjs/common';
import { PengajuanPklService } from './pengajuan-pkl.service';
import { PengajuanPKL } from '../entities/pengajuan-pkl.entity';

@Controller('pengajuan-pkl')
export class PengajuanPklController {
  constructor(private readonly service: PengajuanPklService) {}

  @Get()
  findAll(): Promise<PengajuanPKL[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: Partial<PengajuanPKL>): Promise<PengajuanPKL> {
    return this.service.create(body);
  }
}
