import { Injectable, NotFoundException } from '@nestjs/common';
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
    const { firstName, lastName, noofGuests, startDate, endDate, placeId } =
      createProfileDto;
    const profile = new Tripreservation();
    profile.firstName = firstName;

    profile.lastName = lastName;

    profile.noofGuests = noofGuests;
    profile.startDate = startDate;
    profile.endDate = endDate;
    profile.placeId = placeId;

    return await this.repo.save(profile);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, UpdateTripreservationDto: UpdateTripreservationDto) {
    return `This action updates a #${id} attractionplace`;
  }

  async remove(id: string) {
    const datas = await this.findOne(id);

    if (!datas) {
      throw new NotFoundException('data not found');
    }

    return this.repo.remove(datas);
  }
}
