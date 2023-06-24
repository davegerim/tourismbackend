import { Test, TestingModule } from '@nestjs/testing';
import { TripreservationService } from './tripreservation.service';

describe('TripreservationService', () => {
  let service: TripreservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripreservationService],
    }).compile();

    service = module.get<TripreservationService>(TripreservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
