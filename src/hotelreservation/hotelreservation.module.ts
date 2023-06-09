import { Module } from '@nestjs/common';
import { HotelreservationService } from './hotelreservation.service';
import { HotelreservationController } from './hotelreservation.controller';
import { Hotelreservation } from './entities/hotelreservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hotelreservation])],
  controllers: [HotelreservationController],
  providers: [HotelreservationService],
})
export class HotelreservationModule {}
