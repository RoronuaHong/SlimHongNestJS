import { Controller, Get, Query, Request } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private ArticleService:ArticleService) {}

  @Get()
  index() {
    console.log(this.ArticleService.findAll());
    return {
      articleList: this.ArticleService.findAll()
    }
  }

  @Get('add')
  add(@Request() req) {
    return req.query;
  }
}
