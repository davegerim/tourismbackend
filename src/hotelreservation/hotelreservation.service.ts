import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelreservationDto } from './dto/create-hotelreservation.dto';
import { UpdateHotelreservationDto } from './dto/update-hotelreservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
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
      fullname,
      phoneNumber,
      email,
      roomType,
      noofGuests,
      startDate,
      endDate,
      roomPrice,
      status,
      hotels,
    } = createProfileDto;
    const profile = new Hotelreservation();
    profile.fullname = fullname;
    profile.phoneNumber = phoneNumber;
    profile.email = email;
    profile.roomType = roomType;
    profile.noofGuests = noofGuests;
    profile.startDate = startDate;
    profile.endDate = endDate;
    profile.roomPrice = roomPrice;
    profile.status = status;
    profile.hotels = hotels;

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

  async updates(
    id: string,
    updateDto: UpdateHotelreservationDto,
  ): Promise<Hotelreservation> {
    const profile = await this.repo.findOneBy({ id });

    if (!profile) {
      throw new NotFoundException(`profile with ID $id not found`);
    }

    const updateData: DeepPartial<Hotelreservation> = {
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
