import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateMedicalRecordDto {
  @IsString()
  @IsNotEmpty()
  note: string;

  @IsInt()
  patientId: number;

  @IsInt()
  userId: number;
}
