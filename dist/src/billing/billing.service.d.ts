import { PrismaService } from '../../prisma/prisma.service';
import { CreateBillingDto, UpdateBillingDto } from './billing.dto';
export declare class BillingService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateBillingDto): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: number;
        patientId: number;
        date: Date;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        patientId: number;
        date: Date;
        amount: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: number;
        patientId: number;
        date: Date;
        amount: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: UpdateBillingDto): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: number;
        patientId: number;
        date: Date;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: number;
        patientId: number;
        date: Date;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
