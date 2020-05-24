import { Injectable, CanActivate, ExecutionContext, HttpStatus, HttpException, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const { user } = req
    if(user && user.role === 'admin'){
       return true;
    }
    throw new HttpException('user is not authorised', HttpStatus.UNAUTHORIZED);
  }
}