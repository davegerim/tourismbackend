import { Injectable } from '@nestjs/common';
import { CreateTripreservationDto } from './dto/create-tripreservation.dto';
import { UpdateTripreservationDto } from './dto/update-tripreservation.dto';
import { Tripreservation } from './entities/tripreservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TripreservationService {
  constructor(
    @InjectRepository(Tripreservation)
    private readonly repo: Repository<Tripreservation>,
  ) {}

  async create(
    createProfileDto: CreateTripreservationDto,
  ): Promise<CreateTripreservationDto> {
    const { firstName, lastName, noofGuests, startDate, endDate } =
      createProfileDto;
    const profile = new Tripreservation();
    profile.firstName = firstName;

    profile.lastName = lastName;

    profile.noofGuests = noofGuests;
    profile.startDate = startDate;
    profile.endDate = endDate;

    return await this.repo.save(profile);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, updateTripreservationDto: UpdateTripreservationDto) {
    return `This action updates a #${id} tripreservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripreservation`;
  }
}
