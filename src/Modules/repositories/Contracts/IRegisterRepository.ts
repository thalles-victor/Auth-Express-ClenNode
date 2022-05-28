import { UserEntity } from '../Entities/UserEntity';
interface IRegisterRepository {
  createUser(name: string, email: string, password: string): Promise<void>;
  findUserByEmail(email: string): Promise<UserEntity | undefined>;
}

export { IRegisterRepository };