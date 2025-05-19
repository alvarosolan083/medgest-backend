// src/billing/billing.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateBillingDto, UpdateBillingDto } from './billing.dto';

@Injectable()
export class BillingService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBillingDto) {
    return this.prisma.invoice.create({
      data,
    });
  }

  findAll() {
    return this.prisma.invoice.findMany();
  }

  findOne(id: number) {
    return this.prisma.invoice.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateBillingDto) {
    return this.prisma.invoice.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.invoice.delete({
      where: { id },
    });
  }
}
