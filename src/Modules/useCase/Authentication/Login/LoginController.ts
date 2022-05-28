import type { Request, Response } from 'express';
import  { LoginService } from './LoginService';

interface ILoginRequestDTO {
  email: string;
  password: string;
}

class LoginController {
  constructor(private readonly loginService: LoginService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: ILoginRequestDTO = request.body;

    const token = await this.loginService.execute(email, password);

    return response.status(202).json({ token });
  }
};

export { LoginController };