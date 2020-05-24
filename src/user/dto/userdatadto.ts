import {IsString, IsInt, IsNotEmpty, isNotEmpty, IsEmail } from 'class-validator'

export class UserDataDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  breed: string;
}