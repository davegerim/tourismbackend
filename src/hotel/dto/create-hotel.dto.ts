import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHotelDto {
  @ApiProperty()
  @IsString()
  hotelName: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  image: string;
}
