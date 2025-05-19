import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './appointments.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppointmentsService {
  private appointments = [];

  create(dto: CreateAppointmentDto) {
    const newAppointment = { id: uuidv4(), ...dto };
    this.appointments.push(newAppointment);
    return newAppointment;
  }

  findAll() {
    return this.appointments;
  }

  findOne(id: string) {
    const appointment = this.appointments.find((a) => a.id === id);
    if (!appointment) {
      throw new NotFoundException('Cita no encontrada');
    }
    return appointment;
  }

  remove(id: string) {
    this.appointments = this.appointments.filter((a) => a.id !== id);
    return { message: 'Cita eliminada' };
  }
}
