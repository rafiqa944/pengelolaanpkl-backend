import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PengajuanPKL } from '../entities/pengajuan-pkl.entity';
import { PengajuanPklService } from './pengajuan-pkl.service';
import { PengajuanPklController } from './pengajuan-pkl.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PengajuanPKL])],
  providers: [PengajuanPklService],
  controllers: [PengajuanPklController],
})
export class PengajuanPklModule {}
