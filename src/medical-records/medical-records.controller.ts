import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { CreateMedicalRecordDto } from './medical-records.dto';

@Controller('medical-records')
export class MedicalRecordsController {
  constructor(private readonly medicalService: MedicalRecordsService) {}

  @Post()
  create(@Body() dto: CreateMedicalRecordDto) {
    return this.medicalService.create(dto);
  }

  @Get()
  findAll() {
    return this.medicalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalService.delete(+id);
  }
}
