import { Controller, Get, Query, UsePipes } from '@nestjs/common';

// 引入管道
import { NewsPipe } from '@app/pipe/news.pipe';

@Controller('news')
export class NewsController {
  @Get()
  @UsePipes(new NewsPipe())
  index(@Query() info) {
    console.log(info);

    return '这是一个新闻页面';
  }
}
