import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { profile } from 'console';
import { UserRoleType } from 'src/user/enums/user-role.enum';
import { UserService } from 'src/user/user.service';
@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private repo: Repository<Profile>,
    private userService: UserService,
  ) {}

  // async create(createProfileDto: CreateProfileDto): Promise<CreateProfileDto> {
  //   const { fullName, userName, email, password } = createProfileDto;
  //   const profile = new Profile();
  //   profile.fullName = fullName;
  //   profile.userName = userName;
  //   profile.email = email;
  //   profile.password = password;
  //   return await this.repo.save(profile);
  // }

  async create(dto: CreateProfileDto, role: UserRoleType) {
    const user = await this.userService.create({
      password: dto.password,
      role: role,
      email: dto.email,
    });
    if (user) {
      const profile = this.repo.create(dto);
      profile.user = user;
      return this.repo.save(profile);
    }

    throw new BadRequestException('No user');
  }
  findAll() {
    return this.repo.find();
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
