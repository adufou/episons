export class CreateUserDto {
  username: string;
  password: string;
  email: string;
}

export class UpdateUserDto {
  username?: string;
  password?: string;
  email?: string;
}
