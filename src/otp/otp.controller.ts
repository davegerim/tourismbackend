import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtpService } from './otp.service';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
import { VerifyOtpDto } from './dto/verify.dto';
import { Public } from 'src/auth/jwt-public';

@Public()
@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post()
  create(@Body() createOtpDto: CreateOtpDto) {
    return this.otpService.create(createOtpDto);
  }

  @Post('/generatecode')
  generatecode(@Body() newCodeDto: CreateOtpDto) {
    return this.otpService.generateCode(newCodeDto);
    // return true
  }

  @Post('/verifyotp')
  verfiryOtp(@Body() dto: VerifyOtpDto) {
    return this.otpService.verfiryOtp(dto);
  }

  @Get()
  findAll() {
    return this.otpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.otpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOtpDto: UpdateOtpDto) {
    return this.otpService.update(+id, updateOtpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.otpService.remove(+id);
  }
}
