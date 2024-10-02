import { Controller, Get, Request } from '@nestjs/common';

@Controller('admin/login')
export class LoginController {
  @Get()
  index(@Request() req) {
    console.log(req);
    // 登录 设置session
    req.session.username = '章三';

    return '登录页面';
  }

  @Get('test')
  testIndex(@Request() req) {
    return req.session.username;
  }
}
