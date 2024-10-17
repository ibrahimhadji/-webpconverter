// src/webp-converter/webp-converter.service.ts
import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import { promises as fs } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  async convertToWebP(file: Express.Multer.File): Promise<string> {
    const inputPath = file.path;
    const outputPath = join(__dirname, '../uploads', `${file.filename}.webp`);

    await sharp(inputPath).webp().toFile(outputPath);

    await fs.unlink(inputPath);

    return outputPath;
  }
}
