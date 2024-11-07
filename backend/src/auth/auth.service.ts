import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto/auth.dto";
import * as argon from "argon2";
import { Tokens } from "./types/tokens.type";
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from "./types/jwtPayload.type";


@Injectable()
export class AuthService{
    constructor(private readonly prisma:PrismaService,private jwt:JwtService){}
    async signup(dto:AuthDto){
        const userExist = await this.prisma.user.findUnique({
            where:{
                email:dto.email
            }
        })
        if(userExist) throw new BadRequestException('This user already exists!')
        console.log(dto.email);
        console.log(dto.password);
        console.log(dto.username);
        
        const hash = await argon.hash(dto.password);
        try{
            const user = await this.prisma.user.create({
                data:{
                    email:dto.email,
                    hash:hash,
                    userName:dto.username
                },
                select:{
                    id:true,
                    email:true,
                    hash:true,
                    userName:true
                }
            })
            const tokens = await this.generateToken(user.id,user.email);
            return {user,tokens};
        }
        catch(err){
            throw new ForbiddenException('When trying to add data to DB,something went wrong')
        }
    }
    async generateToken(userId:number,email:string):Promise<Tokens>{
        const payload:JwtPayload = {
            sub:userId,
            email:email
        }
        const accessSecret = process.env.JWT_ACCESS_SECRET
        const refreshSecret = process.env.JWT_REFRESH_SECRET
        const [accessToken,refreshToken] = await Promise.all([
            this.jwt.signAsync(payload,{
                expiresIn:'15m',
                secret:accessSecret
            }),
            this.jwt.signAsync(payload,{
                expiresIn:'28d',
                secret:refreshSecret
            })
        ])
        await this.updateRtHash(userId,refreshToken);
        return {access_token:accessToken,
                refresh_token:refreshToken}
    }
    async signin(dto:AuthDto){
        try{
            const user = await this.prisma.user.findUnique({
                where:{
                    email:dto.email
                }
            })
            if(!user){
                throw new ForbiddenException('Credentials incorrect!')
            }
            const tokens:Tokens = await this.generateToken(user.id,user.email);
            return {user,tokens};
        }catch(err){
            throw new ForbiddenException('When trying to signin,something went wrong!')
        }
    }
    async updateRtHash(userId:number,rt:string):Promise<void>{
        const hash = await argon.hash(rt);
        await this.prisma.user.update({
            where:{
                id:userId
            },
            data:{
                hashedRt:hash
            }
        })

    }
}