import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsNotEmpty()
    @IsString()
    hash:string

    @IsNotEmpty()
    @IsString()
    userName:string
}