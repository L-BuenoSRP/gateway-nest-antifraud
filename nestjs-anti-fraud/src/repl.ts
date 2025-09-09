
import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await repl(AppModule);
}
bootstrap();


// repl - read eval print loop
// get(FraudService).processInvoice({invoice_id: '1', account_id: '1', amount: 100});

// get(PrismaService).invoice.findUnique({where: {id: '1'}});

// get(PrismaService).invoice.findMany();

// get(PrismaService).invoice.findMany({where: {status: 'PENDING'}});

// get(PrismaService).invoice.findMany({where: {status: 'PENDING'}, include: {account: true}});
