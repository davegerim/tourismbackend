import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateOtpDto {
  @ApiProperty()
  @IsString()
  otpcode: number;

  @ApiProperty()
  @IsString()
  email: string;
}
