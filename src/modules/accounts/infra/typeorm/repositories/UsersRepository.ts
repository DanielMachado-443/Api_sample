import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDto";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ email, password, name, id }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      email,
      password,
      name,
      id,
    });

    await this.repository.save(user);

    return user;
  }
}

export { UsersRepository };