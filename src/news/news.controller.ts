import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import * as Joi from '@hapi/joi';

// 引入管道
import { NewsPipe } from '@app/pipe/news/news.pipe';

// joi的schema
const rootInfo = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(6).max(66).required(),
});

@Controller('news')
export class NewsController {
  @Get('minenews')
  @UsePipes(new NewsPipe(rootInfo))
  index(@Query() info) {
    console.log(info);

    return '这是一个新闻页面';
  }
}
