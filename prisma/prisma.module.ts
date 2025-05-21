import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // ¡Este espacio debe estar completamente vacío!
  // El método 'enableShutdownHooks' ha sido ELIMINADO de este archivo.
  // Su lógica de cierre se maneja en main.ts.
}