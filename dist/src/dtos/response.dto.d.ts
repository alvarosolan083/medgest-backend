export declare class ResponseDto<T> {
    data: T;
    message?: string;
    success: boolean;
    constructor(data: T, message?: string, success?: boolean);
}
