import { ILoginRepository } from "../../../repositories/Contracts/ILoginRepository";

class LoginService {
  constructor(private readonly loginRepository: ILoginRepository) {}

  async execute(email: string, password: string): Promise<string> {
    const token = await this.loginRepository.userSessionToken(email, password);

    return token;
  }
};

export { LoginService };