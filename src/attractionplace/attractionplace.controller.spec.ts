import { Test, TestingModule } from '@nestjs/testing';
import { AttractionplaceController } from './attractionplace.controller';
import { AttractionplaceService } from './attractionplace.service';

describe('AttractionplaceController', () => {
  let controller: AttractionplaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttractionplaceController],
      providers: [AttractionplaceService],
    }).compile();

    controller = module.get<AttractionplaceController>(AttractionplaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
