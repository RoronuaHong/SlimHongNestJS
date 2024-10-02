import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Injectable()
export class NewsPipe implements PipeTransform {
  private schema;

  constructor(schema) {
    this.schema = schema;
  }

  transform(value: any, metadata: ArgumentMetadata) {
    // Get 或者 Post 传过来的值
    const { error } = Joi.validate(value, this.schema);
    console.log(value);

    if (error) {
      return false;
    }

    value.id = `修改后的id: ${value.id}`;
    console.log(112233);

    return value;
  }
}
