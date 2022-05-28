import { IRegisterRepository } from "../../../repositories/Contracts/IRegisterRepository";

class CreateAccountService {
  constructor(private readonly registerRepository: IRegisterRepository) {}

  async execute(name: string, email: string, password: string): Promise<void> {
    if (!email && !password) {
      throw new Error("Data not formatted property")
    }
  
    await this.registerRepository.createUser(name, email, password);
  }
};

export { CreateAccountService };