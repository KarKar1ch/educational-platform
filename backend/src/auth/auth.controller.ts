import { BadRequestException, Body, Controller, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { GetCurrentUser } from "./common/decorators/get-current-user.decorator";
import { GetCurrentUserId } from "./common/decorators/get-current-userId.decorator";
import { Public } from "./common/decorators/public.decorator";
import { RtGuard } from "./common/guards/rt.guard";



@Controller('auth')
export class AuthController{
    constructor(private service:AuthService){}
    @Public()
    @Post('signup')
    async signup(@Body() dto:AuthDto){
        console.log(dto.username);
        return await this.service.signup(dto);
    }
    @Public()
    @Post('signin')
    async signin(@Body() dto:AuthDto){
        return await this.service.signin(dto);
    }
    @Public()
    @UseGuards(RtGuard)
    @Patch('refreshTokens')
    async refreshTokens(@GetCurrentUser('refreshToken') refreshToken:string,@GetCurrentUserId() userId:number){
        if(!userId){throw new BadRequestException('User ID not found');}
        try{
            return await this.service.refreshTokens(userId,refreshToken);
        }catch(err){
            console.error("Error!Trying to refresh tokens!")
        }
    }
}