import { Injectable, CanActivate, ExecutionContext, HttpStatus, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
   const req = context.switchToHttp().getRequest();
   const user = req.user;
   if(user.role === 'admin'){
       return true;
   } 
   throw new HttpException('unauthorised access', HttpStatus.UNAUTHORIZED);
  }
}