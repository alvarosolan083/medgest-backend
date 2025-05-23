import { PrismaService } from '../../prisma/prisma.service';
import { CreatePatientDto } from './patients.dto';
export declare class PatientsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePatientDto): import(".prisma/client").Prisma.Prisma__PatientClient<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
        rut: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
        rut: string;
        phone: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PatientClient<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
        rut: string;
        phone: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: Partial<CreatePatientDto>): import(".prisma/client").Prisma.Prisma__PatientClient<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
        rut: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__PatientClient<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
        rut: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
