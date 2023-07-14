import { NextFunction, Response, Request } from 'express';
import BaseHTTPError from '../errors/BaseHTTPError';

const errorHandler = (err: BaseHTTPError, req: Request, res: Response, _next: NextFunction) => {
	const { statusCode, message } = err;

	if (statusCode) return res.status(err.statusCode).json({ message });
	
	return res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;