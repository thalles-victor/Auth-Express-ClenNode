import express from 'express';
import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { createAccountControllers } from './Modules/useCase/Authentication/CreateAccount'
import { loginController } from './Modules/useCase/Authentication/Login'
import { JWTMiddlewareVerify } from './Modules/Middleware/jwt-verify';

const router = express.Router();

router.post("/singup", (request: Request, response: Response) => {
  return createAccountControllers.handle(request, response);
});

router.post('/singin', function (request: Request, response: Response) {
  return loginController.handle(request, response);
});


router.get('/private', JWTMiddlewareVerify, (request, response, next) => {
  const { data } = request.body;
  return response.status(202).json({ message: "This rout is protected!", data });
});

export { router };