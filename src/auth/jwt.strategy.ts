import { PassportStrategy} from '@nestjs/passport'
import { AuthService } from './auth.service';
import {ExtractJwt, Strategy, VerifyCallback} from 'passport-jwt'
import { HttpException, HttpStatus } from '@nestjs/common';


export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authservice: AuthService){
       super({
           jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
           secretOrKey: process.env.SECRET_KEY
       })
    }
    async validate(payload: any, done: VerifyCallback){
        const user = await this.authservice.validateUser(payload);
        if(!user){
            return done(new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED), null)
        }
        return done(null, user);
    }
    

}