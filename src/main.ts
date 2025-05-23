import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS dinámico desde .env
  app.enableCors({
    origin: process.env.FRONTEND_URL || '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  // Shutdown hooks
  const prismaService = app.get(PrismaService);
  await app.enableShutdownHooks();

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server running at http://localhost:${port}`);
}

bootstrap();
