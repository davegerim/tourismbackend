import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLocationDto {
  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  wereda: string;

  @ApiProperty()
  @IsString()
  subcity: string;

  @ApiProperty()
  @IsString()
  housenumber: string;
}
