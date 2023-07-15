"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHTTPError_1 = __importDefault(require("./BaseHTTPError"));
class NotFound extends BaseHTTPError_1.default {
    constructor(message) {
        super(message, 404);
    }
}
exports.default = NotFound;
