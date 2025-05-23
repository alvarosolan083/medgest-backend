import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './appointments.dto';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
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
