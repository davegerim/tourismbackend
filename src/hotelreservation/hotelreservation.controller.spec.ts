import { Test, TestingModule } from '@nestjs/testing';
import { HotelreservationController } from './hotelreservation.controller';
import { HotelreservationService } from './hotelreservation.service';

describe('HotelreservationController', () => {
  let controller: HotelreservationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelreservationController],
      providers: [HotelreservationService],
    }).compile();

    controller = module.get<HotelreservationController>(HotelreservationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
