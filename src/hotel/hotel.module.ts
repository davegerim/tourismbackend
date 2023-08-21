import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { Hotel } from './entities/hotel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel, Room])],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
