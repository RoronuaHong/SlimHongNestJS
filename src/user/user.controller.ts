import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { UserPipe } from '@app/pipe/user/user.pipe';
import * as Joi from '@hapi/joi';

// joi的schema
const userSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(6).max(66).required(),
});

@Controller('mineuser')
export class UserController {
  @Get()
  @UsePipes(new UserPipe(userSchema))
  index(@Query() info) {
    console.log(info);

    return '这是一个用户中心页面';
  }
}
