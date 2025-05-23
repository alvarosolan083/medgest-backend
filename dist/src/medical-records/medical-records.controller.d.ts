import { MedicalRecordsService } from './medical-records.service';
import { CreateMedicalRecordDto } from './medical-records.dto';
export declare class MedicalRecordsController {
    private readonly medicalService;
    constructor(medicalService: MedicalRecordsService);
    create(dto: CreateMedicalRecordDto): import(".prisma/client").Prisma.Prisma__MedicalRecordClient<{
        id: number;
        note: string;
        patientId: number;
        userId: number;
        date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            name: string;
            email: string;
            password: string;
            id: number;
            roleId: number;
            createdAt: Date;
        };
        patient: {
            name: string;
            email: string;
            id: number;
            createdAt: Date;
            rut: string;
            phone: string;
        };
    } & {
        id: number;
        note: string;
        patientId: number;
        userId: number;
        date: Date;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__MedicalRecordClient<{
        id: number;
        note: string;
        patientId: number;
        userId: number;
        date: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__MedicalRecordClient<{
        id: number;
        note: string;
        patientId: number;
        userId: number;
        date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
