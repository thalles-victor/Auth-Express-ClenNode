import type { Request, Response } from 'express';

import { CreateAccountService } from "./CreateAccountService";

class CreateAccountControllers {
  constructor(private readonly createAccountService: CreateAccountService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    await this.createAccountService.execute(name, email, password);

    return response.status(201).send();
  }
};

export { CreateAccountControllers };