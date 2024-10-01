import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { TodolistModule } from './todolist/todolist.module';
import { TodolistController } from './todolist/todolist.controller';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';
import { UploadController } from './upload/upload.controller';
import { MultiuploadController } from './multiupload/multiupload.controller';
import { ProductController } from './product/product.controller';
import { InitMiddleware } from './middleware/init.middleware';
import { Logger } from './middleware/logger.middleware';
import { NewsController } from './news/news.controller';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: 'monorail.proxy.rlwy.net:17241', // Railway 提供的主机地址
  //     port: 3306,
  //     username: 'root',
  //     password: 'IYuEkTcVuWHNKkfWysrZmnLFZGDBDHWU',
  //     database: 'railway',
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //     synchronize: true, // 仅在开发环境使用，生产环境应设为 false
  //   }),
  //   TodolistModule,
  // ],
  controllers: [
    AppController,
    TodolistController,
    ArticleController,
    UploadController,
    MultiuploadController,
    ProductController,
    NewsController,
  ],
  providers: [AppService, ArticleService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(InitMiddleware, Logger).forRoutes('*');
    // .forRoutes({
    //   path: 'cats',
    //   method: RequestMethod.ALL
    // })
  }
}
