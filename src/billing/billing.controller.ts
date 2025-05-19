import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './billing.dto';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  create(@Body() dto: CreateBillingDto) {
    return this.billingService.create(dto);
  }

  @Get()
  findAll() {
    return this.billingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingService.findOne(Number(id));
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.billingService.delete(Number(id));
  }
}
