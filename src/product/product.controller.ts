import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  index() {
    console.log('商品页面');

    return '商品页面';
  }
}
