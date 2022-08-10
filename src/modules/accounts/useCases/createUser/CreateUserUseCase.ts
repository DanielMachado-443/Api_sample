import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "modules/accounts/repositories/IUsersRepository";
import { ICreateUserDTO } from "modules/accounts/dtos/ICreateUserDto";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: ICreateUserDTO): Promise<void> {
    const user = await this.usersRepository.create({
      email,
      password,
    });
  }

}

export { CreateUserUseCase };