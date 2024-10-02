import { Controller, Get } from '@nestjs/common';
import { AppService } from '@app/app.service';

@Controller('admin/user')
export class UserController {
  constructor(private AppService: AppService) {}

  @Get()
  index() {
    console.log(this.AppService.getConfig());

    return '用户管理页面';
  }
}
