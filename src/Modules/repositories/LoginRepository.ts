import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { users } from '../../database/UsersDB';
import { ILoginRepository } from './Contracts/ILoginRepository';
import { UserEntity } from './Entities/UserEntity';


export class LoginRepository implements ILoginRepository{
  async userSessionToken(email: string, password: string): Promise<string> {
    console.log(email, password);
    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new Error("This User not exist!");
    }

    if (!await this.thisPasswordIsValid(password, user.password)) {
      throw new Error("Password is not valid!");
    };

    const { password: passwd, ...payload } = user;
  
    const token = await sign(
      { ...payload },
      process.env.SECRET_KEY_JWT,
      { expiresIn: 600 } // 5min
    );

    return ("Bearer " + token);
  }

  private async thisPasswordIsValid(password: string, hashed_password: string): Promise<boolean> {
    const userIsValid = await bcrypt.compare(password, hashed_password);

    return userIsValid;
  }

  async findUserByEmail(email: string): Promise<UserEntity | undefined> {
    const user = await users.find((user) => user.email === email);

    return user;
  }
}