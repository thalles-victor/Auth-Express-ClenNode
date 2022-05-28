import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

function JWTMiddlewareVerify(request: Request, response: Response, next: NextFunction) {
  const { token } = request.headers;
  
  jwt.verify(token as string, process.env.SECRET_KEY_JWT, (error, payload) => {
    if (error) {
      response.status(401).json({
        status: 401,
        error: "Token is invalid",
      });
    }

    next();
  });
}


export { JWTMiddlewareVerify };