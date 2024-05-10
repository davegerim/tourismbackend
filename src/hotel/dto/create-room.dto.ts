import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoomDto {
  @ApiProperty()
  @IsString()
  roomName: string;

  @ApiProperty()
  @IsString()
  bed: string;

  @ApiProperty()
  @IsString()
  person: string;

  @ApiProperty()
  @IsString()
  area: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  roomType: string;

  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsString()
  price: number;

  @ApiProperty()
  @IsString()
  rate: number;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  Hotel1: string;
}
