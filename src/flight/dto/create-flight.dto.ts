import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFlightDto {
  @ApiProperty()
  @IsString()
  from: string;

  @ApiProperty()
  @IsString()
  to: string;

  @ApiProperty()
  @IsString()
  calander: string;

  @ApiProperty()
  @IsString()
  departureDate: string;

  @ApiProperty()
  @IsString()
  returnDate: string;

  @ApiProperty()
  @IsString()
  male: string;

  @ApiProperty()
  @IsString()
  female: string;

  @ApiProperty()
  @IsString()
  child: string;

  @ApiProperty()
  @IsString()
  cabinClass: string;
}
