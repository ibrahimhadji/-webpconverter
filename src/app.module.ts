import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { WebpConverterModule } from 'nestjs-webp-converter';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    WebpConverterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
