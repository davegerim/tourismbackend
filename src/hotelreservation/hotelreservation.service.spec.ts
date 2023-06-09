import { Test, TestingModule } from '@nestjs/testing';
import { HotelreservationService } from './hotelreservation.service';

describe('HotelreservationService', () => {
  let service: HotelreservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelreservationService],
    }).compile();

    service = module.get<HotelreservationService>(HotelreservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
