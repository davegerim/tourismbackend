import { ApiProperty } from '@nestjs/swagger';
import {  IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
  @ApiProperty()
  @IsString()
  status: string;
}
