import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFiles,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import {
  FileInterceptor,
  // FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  @Get()
  index() {}

  @Post('doAdd')
  @UseInterceptors(FileInterceptor('pic'))
  doAdd(@Body() body, @UploadedFile() file) {
    // 必须在form的属性里配置enctype='multipart/form-data'
    console.log(body);
    console.log(file);

    const writeStream = createWriteStream(
      join(
        __dirname,
        '../../public/upload',
        `${Date.now()}-${file.originalname}`,
      ),
    );

    writeStream.write(file.buffer);

    return '上传图片成功';
  }

  @Post('multiupload')
  @UseInterceptors(FilesInterceptor('pic'))
  uploadFiles(@UploadedFiles() files, @Body() body) {
    // 如果要实现一些文件上传的话还需要进行一些判断
    for (const file of files) {
      const writeImage = createWriteStream(
        join(
          __dirname,
          '../../public/upload',
          `${Date.now()}-${file.originalname}`,
        ),
      );

      writeImage.write(file.buffer);
    }
  }
}

//   @Post('multiupload')
//   @UseInterceptors(
//     FileFieldsInterceptor([
//       { name: 'avatar', maxCount: 1 },
//       { name: 'background', maxCount: 1 },
//     ]),
//   )
//   uploadFiles(@UploadFiles() files, @Body() body) {
//     console.log(files);

//     for (const file of files) {
//       const writeImage = createWriteStream(
//         join(
//           __dirname,
//           '../../public/upload',
//           `${Date.now()}-${file.originalname}`,
//         ),
//       );

//       writeImage.write(file.buffer);
//     }

//     return '上传成功';
//   }
// }
