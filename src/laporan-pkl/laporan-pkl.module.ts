import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaporanPKL } from '../entities/laporan-pkl.entity';
import { LaporanPklService } from './laporan-pkl.service';
import { LaporanPklController } from './laporan-pkl.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LaporanPKL])],
  providers: [LaporanPklService],
  controllers: [LaporanPklController],
})
export class LaporanPklModule {}
