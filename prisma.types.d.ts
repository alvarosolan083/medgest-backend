// prisma.types.d.ts
import { PrismaClient } from '@prisma/client';

declare module '@prisma/client' {
  interface PrismaClient {
    $on(event: 'beforeExit', listener: () => void): void;
  }
}
