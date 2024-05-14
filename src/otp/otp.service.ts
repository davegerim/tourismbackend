import { Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
import { Otp } from './entities/otp.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class OtpService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Otp)
    private readonly usedNumbersRepository: Repository<Otp>,
  ) {}

  async generateUniqueNumber(): Promise<number> {
    let otpcode: number;

    do {
      otpcode = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    } while (await this.usedNumbersRepository.findOne({ where: { otpcode } }));

    return otpcode;
  }

  async generateCode(newCodeDto: CreateOtpDto): Promise<Otp> {
    // Generate a new unique number
    const uniqueNumber = await this.generateUniqueNumber();

    // Find the user by email
    const user = await this.userRepository.findOne({
      where: { email: newCodeDto.email },
    });

    // If user found, expire any active OTPs associated with the user
    if (user) {
      const activeOtps = await this.usedNumbersRepository.findOne({
        where: { user: { id: user.id }, status: 'active' },
      });
      if (activeOtps) {
        await this.usedNumbersRepository.update(activeOtps.id, {
          status: 'expired',
        });
      }

      // Create a new entry for UsedNumber
      const usedNumber = new Otp();
      usedNumber.otpcode = uniqueNumber;
      usedNumber.user = user;

      // Save the new Otp entry
      return this.usedNumbersRepository.save(usedNumber);
    } else {
      throw new Error('User not found'); // Handle the case where user is not found
    }
  }

  async verfiryOtp(dto: CreateOtpDto) {
    const tp = await this.usedNumbersRepository.findOneBy({
      otpcode: dto.otpcode,
      user: { email: dto.email },
      status: 'active',
    });
    if (tp) {
      tp.status = 'completed';
      //save tp
      this.usedNumbersRepository.update(tp.id, tp);
      return true;
    }
    return false;
  }

  create(createOtpDto: CreateOtpDto) {
    return 'This action adds a new otp';
  }

  findAll() {
    return `This action returns all otp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otp`;
  }

  update(id: number, updateOtpDto: UpdateOtpDto) {
    return `This action updates a #${id} otp`;
  }

  remove(id: number) {
    return `This action removes a #${id} otp`;
  }
}
