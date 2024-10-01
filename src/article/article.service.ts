import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  findAll() {
    return [
      {
        title: '新闻11111',
      },
      {
        title: '新闻22222',
      },
      {
        title: '新闻33333',
      },
    ];
  }
}
