import { Email } from "../../../Providers/SendEmail";
import { RegisterRepository } from "../../../repositories/RegisterRepository";
import { CreateAccountService } from "./CreateAccountService";
import { CreateAccountControllers } from "./CreateAccountControllers";

const email = new Email();
const  registerRepository = new RegisterRepository(email);
const  createAccountService = new CreateAccountService(registerRepository);
const  createAccountControllers = new CreateAccountControllers(createAccountService);

export { createAccountControllers };