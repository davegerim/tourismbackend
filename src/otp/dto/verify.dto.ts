import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty()
  @IsString()
  otpcode: number;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  status: string;
}
