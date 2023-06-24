import { Module } from '@nestjs/common';
import { TripreservationService } from './tripreservation.service';
import { TripreservationController } from './tripreservation.controller';
import { Tripreservation } from './entities/tripreservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tripreservation])],
  controllers: [TripreservationController],
  providers: [TripreservationService],
})
export class TripreservationModule {}
