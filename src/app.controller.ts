import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req): string {
    // 设置session
    req.session.username = '哈哈哈';

    return this.appService.getHello();
  }

  @Get('test')
  getTest(): string {
    return this.appService.getTest();
  }

  @Get('users')
  userIndex(@Request() req): string {
    console.log(req.session.username);

    return '用户中心';
  }
}
