import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcessInvoiceFraudDto } from '../dto/process-invoice-fraud.dto';

@Injectable()
export class FraudService {
  constructor(private readonly prisma: PrismaService) {}

  async processInvoice(dto: ProcessInvoiceFraudDto) {
    const { account_id, invoice_id, amount } = dto;

    const invoice = await this.prisma.invoice.findUnique({
      where: { id: invoice_id },
    });

    if (invoice) {
      throw new NotFoundException('Invoice has already been processed');
    }

    this.prisma.account.upsert({
      where: { id: account_id },
      update: {},
      create: { id: account_id },
    });
    
  }
}
