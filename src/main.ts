import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { PrismaService } from '../prisma/prisma.service'; // ✅ Import correcto

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  // --- Configuración de CORS más explícita ---
  app.enableCors({
    origin: 'https://medgest-frontend.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  // --- Lógica para el shutdown hook de Prisma ---
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app); // ✅ Sin 'as any'
  // ----------------------------------------------------------------

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server running at http://localhost:${port}`);
}

bootstrap();
