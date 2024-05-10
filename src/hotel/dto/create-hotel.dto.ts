import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateHotelDto {
  @ApiProperty()
  @IsString()
  hotelName: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsString()
  hotelType: string;

  @ApiProperty()
  @IsString()
  cityLocation: string;

  @ApiProperty()
  @IsString()
  image: string;
}
