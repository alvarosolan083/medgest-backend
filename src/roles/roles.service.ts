import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateRoleDto } from './roles.dto';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateRoleDto) {
    return this.prisma.role.create({ data });
  }

  findAll() {
    return this.prisma.role.findMany();
  }

  findOne(id: number) {
    return this.prisma.role.findUnique({ where: { id } });
  }

  update(id: number, data: Partial<CreateRoleDto>) {
    return this.prisma.role.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.role.delete({ where: { id } });
  }
}
