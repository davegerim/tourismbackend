import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelreservationDto } from './create-hotelreservation.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateHotelreservationDto extends PartialType(
  CreateHotelreservationDto,
) {
  @ApiProperty()
  @IsString()
  status: string;
}
