import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('守卫执行了');

    // 做权限判断
    // const n = Math.random();

    // console.log(n);
    // if (n > 0.3) {
    //   return true;
    // } else {
    //   return false;
    // }
    const userInfo = context.switchToHttp().getRequest().session.username;
    const req = context.switchToHttp().getRequest();
    // const cookies = context.switchToHttp().getRequest().cookie;

    if (req.path === '/admin/login') {
      return true;
    } else {
      if (userInfo) {
        return true;
      } else {
        return false;
      }
    }
  }
}
