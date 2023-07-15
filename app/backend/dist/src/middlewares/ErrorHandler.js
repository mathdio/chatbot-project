"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, _next) => {
    const { statusCode, message } = err;
    if (statusCode)
        return res.status(err.statusCode).json({ message });
    return res.status(500).json({ message: 'Internal Server Error' });
};
exports.default = errorHandler;
