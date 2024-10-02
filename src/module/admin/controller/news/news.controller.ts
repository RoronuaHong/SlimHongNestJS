import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../../service/news/news.service';
// import { AuthGuard } from '@app/guard/auth/auth.guard';

@Controller('admin/news')
// 配置守卫
// @UseGuards(AuthGuard)
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  index() {
    console.log(this.newsService.getNews());

    return '用户新闻页面';
  }
}
