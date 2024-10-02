import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
// import { AuthGuard } from './guard/auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 配置静态资源
  app.useStaticAssets('public');

  // 配置cookie中间件
  app.use(cookieParser('this is cookie'));

  // 配置senssion
  app.use(
    session({
      secret: 'keyboard cat',
      cookie: {
        maxAge: 6000 * 1000 * 10,
      },
    }),
  );

  // 配置全局守卫
  // app.useGlobalGuards(new AuthGuard());

  await app.listen(3000);
}

bootstrap();
