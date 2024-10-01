import { Test, TestingModule } from '@nestjs/testing';
import { MultiuploadController } from './multiupload.controller';

describe('MultiuploadController', () => {
  let controller: MultiuploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultiuploadController],
    }).compile();

    controller = module.get<MultiuploadController>(MultiuploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
