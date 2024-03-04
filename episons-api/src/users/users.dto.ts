import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
}

export class UpdateUserDto {
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password?: string;
  @ApiProperty()
  email?: string;
}
