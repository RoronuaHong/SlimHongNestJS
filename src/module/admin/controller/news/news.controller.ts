import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../../service/news/news.service';

@Controller('admin/news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  index() {
    console.log(this.newsService.getNews());

    return '用户新闻页面';
  }
}
