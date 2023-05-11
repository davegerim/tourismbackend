import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCityDto {
  @ApiProperty()
  @IsString()
  cityName: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  image: string;
}
