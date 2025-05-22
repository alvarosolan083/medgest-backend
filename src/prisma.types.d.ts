// prisma.types.d.ts
import '@prisma/client';

declare module '@prisma/client' {
  interface PrismaClient {
    $on(event: 'beforeExit', callback: () => void): void;
  }
}
