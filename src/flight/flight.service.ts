import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from './entities/flight.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly repo: Repository<Flight>,
  ) {}
  async create(createProfileDto: CreateFlightDto): Promise<CreateFlightDto> {
    const {
      from,
      to,
      calander,
      departureDate,
      returnDate,
      male,
      female,
      child,
      cabinClass,
    } = createProfileDto;
    const profile = new Flight();
    profile.from = from;
    profile.to = to;
    profile.calander = calander;
    profile.departureDate = departureDate;
    profile.returnDate = returnDate;
    profile.male = male;
    profile.female = female;
    profile.child = child;
    profile.cabinClass = cabinClass;

    return await this.repo.save(profile);
  }
  findAll() {
    return `This action returns all flight`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flight`;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
