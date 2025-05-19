import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './notifications.dto';

@Injectable()
export class NotificationsService {
  private notifications: any[] = [];

  create(notification: CreateNotificationDto) {
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

  findOne(id: number) {
    return this.notifications.find((n) => n.id === id);
  }

  delete(id: number) {
    this.notifications = this.notifications.filter((n) => n.id !== id);
    return { message: 'Notificación eliminada' };
  }
}
