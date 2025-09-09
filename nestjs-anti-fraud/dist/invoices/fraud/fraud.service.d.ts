import { PrismaService } from 'src/prisma/prisma.service';
import { ProcessInvoiceFraudDto } from '../dto/process-invoice-fraud.dto';
export declare class FraudService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    processInvoice(dto: ProcessInvoiceFraudDto): Promise<void>;
}
