import { UserEntity } from "../Entities/UserEntity";

interface ILoginRepository {
  userSessionToken(email: string, password: string): Promise<string>;
  findUserByEmail(email: string): Promise<UserEntity | undefined>;
}

export { ILoginRepository };