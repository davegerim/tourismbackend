import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  save(user: User): User | PromiseLike<User> {
    return this.repo.save(user);
  }
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }
  async create(createUserDto: CreateUserDto) {
    if (!createUserDto.email) {
      throw new BadRequestException('Please provide and email');
    }
    const check = await this.findOne(createUserDto.email);
    if (check) {
      throw new BadRequestException('Email {} already exists');
    }

    const hashedPassword = await this.hashPassword(createUserDto.password);

    const user = await this.repo.create(createUserDto);
    user.password = hashedPassword;

    return this.repo.save(user);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(email: string) {
    return this.repo.findOneBy({ email });
  }

  async updates(id: string, updateProfileDto: UpdateUserDto): Promise<User> {
    const profile = await this.repo.findOneBy({ id });

    if (!profile) {
      throw new NotFoundException(`profile with ID $id not found`);
    }
    if (updateProfileDto.password) {
      // Hash the new password
      const hashedPassword = await this.hashPassword(updateProfileDto.password);
      // Update the profile with the hashed password
      this.repo.merge(profile, updateProfileDto);
      profile.password = hashedPassword;
    }
    // Update user properties with the values from updateUserDto

    return this.repo.save(profile);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
