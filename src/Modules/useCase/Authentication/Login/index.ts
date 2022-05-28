import { LoginRepository } from '../../../repositories/LoginRepository';
import { LoginService } from "./LoginService";
import { LoginController } from "./LoginController";


const  loginRepository  =  new LoginRepository();
const  loginService  =  new LoginService(loginRepository);
const  loginController  =  new LoginController(loginService);

export { loginController };