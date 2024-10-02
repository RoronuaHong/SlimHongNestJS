import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';
import { NewsService } from './service/news/news.service';
import { AppService } from '@app/app.service';
import { LoginController } from './controller/login/login.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@app/guard/auth/auth.guard';

@Module({
  controllers: [UserController, NewsController, LoginController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    NewsService,
    AppService,
  ],
})
export class AdminModule {}
