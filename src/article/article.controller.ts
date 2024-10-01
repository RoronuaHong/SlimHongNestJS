import { Controller, Get, Request, Response } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private ArticleService: ArticleService) {}

  @Get()
  index(@Response() res) {
    // 设置cookie
    res.cookie('username', '我是Cookie', {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
      signed: true,
    });

    res.send({
      articleList: this.ArticleService.findAll(),
    });
  }

  @Get('add')
  add(@Request() req) {
    return req.query;
  }

  @Get('cookie')
  getCookie(@Request() req) {
    console.log(req.signedCookies.username);

    return req.signedCookies.username;
  }
}
