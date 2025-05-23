import { PatientsService } from './patients.service';
import { CreatePatientDto } from './patients.dto';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    create(dto: CreatePatientDto): import(".prisma/client").Prisma.Prisma__PatientClient<{
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PatientClient<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
        rut: string;
        phone: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: Partial<CreatePatientDto>): import(".prisma/client").Prisma.Prisma__PatientClient<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
        rut: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__PatientClient<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
        rut: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
