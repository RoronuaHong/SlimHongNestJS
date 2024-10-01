import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NewsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Get 或者 Post 传过来的值
    console.log(value);
    console.log(112233);

    return value;
  }
}
