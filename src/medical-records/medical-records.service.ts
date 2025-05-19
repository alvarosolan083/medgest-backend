import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateMedicalRecordDto } from './medical-records.dto';

@Injectable()
export class MedicalRecordsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateMedicalRecordDto) {
    return this.prisma.medicalRecord.create({ data });
  }

  findAll() {
    return this.prisma.medicalRecord.findMany({
      include: { patient: true, user: true },
    });
  }

  findOne(id: number) {
    return this.prisma.medicalRecord.findUnique({ where: { id } });
  }

  delete(id: number) {
    return this.prisma.medicalRecord.delete({ where: { id } });
  }
}
