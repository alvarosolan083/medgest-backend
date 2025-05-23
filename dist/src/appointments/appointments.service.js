"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let AppointmentsService = class AppointmentsService {
    constructor() {
        this.appointments = [];
    }
    create(dto) {
        const newAppointment = { id: (0, uuid_1.v4)(), ...dto };
        this.appointments.push(newAppointment);
        return newAppointment;
    }
    findAll() {
        return this.appointments;
    }
    findOne(id) {
        const appointment = this.appointments.find((a) => a.id === id);
        if (!appointment) {
            throw new common_1.NotFoundException('Cita no encontrada');
        }
        return appointment;
    }
    remove(id) {
        this.appointments = this.appointments.filter((a) => a.id !== id);
        return { message: 'Cita eliminada' };
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)()
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map