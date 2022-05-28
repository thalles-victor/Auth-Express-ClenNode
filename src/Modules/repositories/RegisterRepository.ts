import * as bcrypt from 'bcrypt';

import { users } from '../../database/UsersDB';
import { UserEntity } from './Entities/UserEntity';

import { ISendMailService } from '../Providers/Contracts/ISendMail';
import { IRegisterRepository } from './Contracts/IRegisterRepository';

class RegisterRepository implements IRegisterRepository {
  constructor(private readonly sendMailService: ISendMailService) {}

  async createUser(name: string, email: string, password: string) {
    const userId = users.length - 1; // Todo: read result for see be right.
  
    if (await this.findUserByEmail(email)) {
      throw new Error("This User already exist!");
    }
    
    const hased_password = bcrypt.hashSync(password, 12);
    
    try {
      await users.push({
        id: userId,
        email,
        password: hased_password,
      })
      console.log(users);

      await this.sendMailService.sendEmail(email, name);
      
    } catch (err) {
      throw new Error("Fail to register user: ")
    }
  }

  async findUserByEmail(email: string): Promise<UserEntity | undefined> {
    const user = users.find((user) =>
      user.email === email
    )
    return user ? user : undefined;
  }

  //Remove when finish
  async findAll() {
    return await users;
  }
}

export { RegisterRepository };