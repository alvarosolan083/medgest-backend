import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
// import { PrismaModule } from 'prisma/prisma.module'; // <-- ¡Esta línea debe ELIMINARSE!
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret',
      signOptions: { expiresIn: '7d' },
    }),
    // PrismaModule, // <-- ¡Esta línea también debe ELIMINARSE!
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}