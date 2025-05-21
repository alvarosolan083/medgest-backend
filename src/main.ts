// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { PrismaService } from './common/prisma.service'; // ¡Importación correcta!

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  // --- Lógica para el shutdown hook de Prisma (Ahora solo aquí) ---
  const prismaService = app.get(PrismaService);
  // Se usa 'as any' para evitar el error de tipado con 'beforeExit'
  (prismaService as any).$on('beforeExit', async () => {
    await app.close();
  });
  // ----------------------------------------------------------------

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server running at http://localhost:${port}`);
}

bootstrap();