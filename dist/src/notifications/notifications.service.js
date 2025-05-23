"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
let NotificationsService = class NotificationsService {
    constructor() {
        this.notifications = [];
    }
    create(notification) {
        const newNotification = {
            id: Date.now(),
            date: new Date(),
            ...notification,
        };
        this.notifications.push(newNotification);
        return newNotification;
    }
    findAll() {
        return this.notifications;
    }
    findOne(id) {
        return this.notifications.find((n) => n.id === id);
    }
    delete(id) {
        this.notifications = this.notifications.filter((n) => n.id !== id);
        return { message: 'Notificación eliminada' };
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)()
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map