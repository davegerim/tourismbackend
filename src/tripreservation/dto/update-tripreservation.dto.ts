import { PartialType } from '@nestjs/mapped-types';
import { CreateTripreservationDto } from './create-tripreservation.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateTripreservationDto extends PartialType(
  CreateTripreservationDto,
) {
  @ApiProperty()
  @IsString()
  status: string;
}
