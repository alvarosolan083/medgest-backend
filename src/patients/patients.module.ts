import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService, PrismaService],
})
export class PatientsModule {}
