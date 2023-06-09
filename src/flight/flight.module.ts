import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './entities/flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
