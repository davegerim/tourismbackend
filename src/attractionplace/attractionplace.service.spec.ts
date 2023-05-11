import { Test, TestingModule } from '@nestjs/testing';
import { AttractionplaceService } from './attractionplace.service';

describe('AttractionplaceService', () => {
  let service: AttractionplaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttractionplaceService],
    }).compile();

    service = module.get<AttractionplaceService>(AttractionplaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
