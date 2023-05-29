import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { profile } from 'console';
@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly repo: Repository<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<CreateProfileDto> {
    const {
      firstName,
      middleName,
      lastName,
      gender,
      age,
      birthDate,
      password,
      email,
      role,
    } = createProfileDto;
    const profile = new Profile();
    profile.firstName = firstName;
    profile.middleName = middleName;
    profile.lastName = lastName;
    profile.gender = gender;
    profile.age = age;
    profile.birthDate = birthDate;
    profile.password = password;
    profile.email = email;
    profile.role = role;
    return await this.repo.save(profile);
  }

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
