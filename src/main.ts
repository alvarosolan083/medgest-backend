// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { PrismaService } from './common/prisma.service';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  // --- Configuración de CORS más explícita ---
  app.enableCors({
    origin: 'https://medgest-frontend.vercel.app', // ¡Reemplaza con la URL EXACTA de tu frontend!
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Permite todos los métodos comunes
    credentials: true, // Importante si usas cookies o tokens de autorización con credenciales
  });
  // ------------------------------------------

  app.useGlobalPipes(new ValidationPipe());

  // --- Lógica para el shutdown hook de Prisma ---
  const prismaService = app.get(PrismaService);
  (prismaService as any).$on('beforeExit', async () => {
    await app.close();
  });
  // ----------------------------------------------------------------

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server running at http://localhost:${port}`);
}

bootstrap();