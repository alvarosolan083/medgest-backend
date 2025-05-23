import { BillingService } from './billing.service';
import { CreateBillingDto } from './billing.dto';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    create(dto: CreateBillingDto): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: number;
        patientId: number;
        date: Date;
        amount: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: number;
        patientId: number;
        date: Date;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
