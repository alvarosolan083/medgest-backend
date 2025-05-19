export class ResponseDto<T> {
  data: T;
  message?: string;
  success: boolean;

  constructor(data: T, message?: string, success = true) {
    this.data = data;
    this.message = message;
    this.success = success;
  }
}
