"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDto = void 0;
class ResponseDto {
    constructor(data, message, success = true) {
        this.data = data;
        this.message = message;
        this.success = success;
    }
}
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response.dto.js.map