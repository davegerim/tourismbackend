import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHotelreservationDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  roomType: string;

  @ApiProperty()
  @IsString()
  noofGuests: string;

  @ApiProperty()
  @IsString()
  startDate: string;

  @ApiProperty()
  @IsString()
  endDate: string;
}
