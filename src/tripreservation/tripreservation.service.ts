import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTripreservationDto } from './dto/create-tripreservation.dto';
import { UpdateTripreservationDto } from './dto/update-tripreservation.dto';
import { Tripreservation } from './entities/tripreservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';

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

  async updates(
    id: string,
    updateDto: UpdateTripreservationDto,
  ): Promise<Tripreservation> {
    const profile = await this.repo.findOneBy({ id });

    if (!profile) {
      throw new NotFoundException(`profile with ID $id not found`);
    }

    const updateData: DeepPartial<Tripreservation> = {
      status: updateDto.status,
      // Map other properties if needed
    };
    // Update user properties with the values from updateUserDto
    this.repo.merge(profile, updateData);

    return this.repo.save(profile);
  }

  async remove(id: string) {
    const datas = await this.findOne(id);

    if (!datas) {
      throw new NotFoundException('data not found');
    }

    return this.repo.remove(datas);
  }
}
