import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './notifications.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(dto: CreateNotificationDto): {
        message: string;
        type?: string;
        recipient?: string;
        id: number;
        date: Date;
    };
    findAll(): any[];
    findOne(id: string): any;
    delete(id: string): {
        message: string;
    };
}
