import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsString()
  pacienteId: string;

  @IsNotEmpty()
  @IsString()
  medicoId: string;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;

  @IsNotEmpty()
  @IsString()
  hora: string;

  @IsString()
  estado: string = 'pendiente';
}
