import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelreservationDto } from './create-hotelreservation.dto';

export class UpdateHotelreservationDto extends PartialType(
  CreateHotelreservationDto,
) {}
