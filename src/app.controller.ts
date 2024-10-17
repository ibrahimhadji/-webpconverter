import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const webpPath = await this.appService.convertToWebP(file);
    return { message: 'File converted to WebP successfully', path: webpPath };
  }

  // @Get()
  // getHello(): string {
  //   // return this.appService.getHello();
  // }
}
