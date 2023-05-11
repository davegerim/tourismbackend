import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAttractionplaceDto {
  @ApiProperty()
  @IsString()
  placeName: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsString()
  price: string;

  @ApiProperty()
  @IsString()
  rate: string;
}
