import { Address } from '../types/user';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export class RegisterDTO {

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  seller?: boolean;

  @ApiProperty()
  address?: Address;
}
