// src/common/interceptors/logger.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const now = Date.now();

    console.log(`[${method}] ${url} - START`);

    return next.handle().pipe(
      tap(() =>
        console.log(`[${method}] ${url} - END (${Date.now() - now}ms)`)
      ),
    );
  }
}
