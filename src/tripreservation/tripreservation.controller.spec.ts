import { Test, TestingModule } from '@nestjs/testing';
import { TripreservationController } from './tripreservation.controller';
import { TripreservationService } from './tripreservation.service';

describe('TripreservationController', () => {
  let controller: TripreservationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripreservationController],
      providers: [TripreservationService],
    }).compile();

    controller = module.get<TripreservationController>(TripreservationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
