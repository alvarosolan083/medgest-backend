import { CreateNotificationDto } from './notifications.dto';
export declare class NotificationsService {
    private notifications;
    create(notification: CreateNotificationDto): {
        message: string;
        type?: string;
        recipient?: string;
        id: number;
        date: Date;
    };
    findAll(): any[];
    findOne(id: number): any;
    delete(id: number): {
        message: string;
    };
}
