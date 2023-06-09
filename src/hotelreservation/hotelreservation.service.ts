import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelreservationDto } from './dto/create-hotelreservation.dto';
import { UpdateHotelreservationDto } from './dto/update-hotelreservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotelreservation } from './entities/hotelreservation.entity';

@Injectable()
export class HotelreservationService {
  constructor(
    @InjectRepository(Hotelreservation)
    private readonly repo: Repository<Hotelreservation>,
  ) {}

  async create(
    createProfileDto: CreateHotelreservationDto,
  ): Promise<CreateHotelreservationDto> {
    const {
      firstName,
      phoneNumber,
      lastName,
      roomType,
      noofGuests,
      startDate,
      endDate,
    } = createProfileDto;
    const profile = new Hotelreservation();
    profile.firstName = firstName;
    profile.phoneNumber = phoneNumber;
    profile.lastName = lastName;
    profile.roomType = roomType;
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

  update(id: number, updateHotelreservationDto: UpdateHotelreservationDto) {
    return `This action updates a #${id} hotelreservation`;
  }

  async remove(id: string) {
    const datas = await this.findOne(id);

    if (!datas) {
      throw new NotFoundException('data not found');
    }

    return this.repo.remove(datas);
  }
}
