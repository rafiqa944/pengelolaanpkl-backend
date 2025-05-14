import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { PengajuanPKL } from './entities/pengajuan-pkl.entity';
import { LaporanPKL } from './entities/laporan-pkl.entity';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rafiqa942404_', 
      database: 'data_pkl',
      entities: [User, PengajuanPKL, LaporanPKL],
      synchronize: true, 
    }),
     User,
     PengajuanPKL,
     LaporanPKL,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
