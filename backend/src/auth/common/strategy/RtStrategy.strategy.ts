import { ForbiddenException, Injectable } from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {Strategy,ExtractJwt} from 'passport-jwt';
import { Request } from 'express';
import { JwtPayload } from 'src/auth/types/jwtPayload.type';
import { JwtPayloadWithRt } from 'src/auth/types/jwtPayloadWithRt.type';


@Injectable()
export class RtStrategy extends PassportStrategy(Strategy,'jwt-refresh'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_REFRESH_SECRET,
            passReqToCallback:true
        })
    }
    
    validate(req:Request,payload:JwtPayload):JwtPayloadWithRt{
        console.log('Payload:', payload);
        console.log('Headers:', req.headers);
        const authorizationHeader = req.header('authorization');
        if (!authorizationHeader) {
            console.error('Authorization header missing');
            throw new ForbiddenException('Authorization header missing');
        }
        const refreshToken = authorizationHeader.split(' ')[1];

        if(!refreshToken) throw new ForbiddenException('Refresh token malformed');
        console.log('all is good');
        
        return {...payload,refreshToken};
    }
}