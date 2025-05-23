import { CreateAppointmentDto } from './appointments.dto';
export declare class AppointmentsService {
    private appointments;
    create(dto: CreateAppointmentDto): {
        pacienteId: string;
        medicoId: string;
        fecha: string;
        hora: string;
        estado: string;
        id: string;
    };
    findAll(): any[];
    findOne(id: string): any;
    remove(id: string): {
        message: string;
    };
}
