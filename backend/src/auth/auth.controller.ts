import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";



@Controller('auth')
export class AuthController{
    constructor(private service:AuthService){}
    @Post('signup')
    async signup(@Body() dto:AuthDto){
        return await this.service.signup(dto);
    }
    @Post('signin')
    async signin(@Body() dto:AuthDto){
        return await this.service.signin(dto);
    }
    
}