import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreatePatientDto } from './patients.dto';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePatientDto) {
    return this.prisma.patient.create({ data });
  }

  findAll() {
    return this.prisma.patient.findMany();
  }

  findOne(id: number) {
    return this.prisma.patient.findUnique({ where: { id } });
  }

  update(id: number, data: Partial<CreatePatientDto>) {
    return this.prisma.patient.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.patient.delete({ where: { id } });
  }
}
