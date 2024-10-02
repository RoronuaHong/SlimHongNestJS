import { Controller, Get } from '@nestjs/common';
import { BaseService } from '@app/module/share/service/base/base.service';

@Controller('default/news')
export class NewsController {
  constructor(private BaseService: BaseService) {}

  @Get()
  index() {
    console.log(this.BaseService.getData());
    return '我是前台的new页面';
  }
}
