import { Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { OtpController } from './otp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Otp } from './entities/otp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Otp, User])],
  controllers: [OtpController],
  providers: [OtpService],
  exports: [OtpService]
})
export class OtpModule {}
