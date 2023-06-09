import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly repo: Repository<Hotel>,
  ) {}
  async create(createProfileDto: CreateHotelDto): Promise<CreateHotelDto> {
    console.log(createProfileDto);

    const { hotelName, description, image } = createProfileDto;
    const hotel = new Hotel();
    hotel.hotelName = hotelName;
    hotel.description = description;
    hotel.image = image;
    return await this.repo.save(hotel);
  }
  async saveImage(hotelId: number, imageData: string) {
    const hotel = await this.repo.findOne({
      where: { id: hotelId.toString() },
    });
    hotel.image = imageData;
    await this.repo.save(hotel);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  async remove(id: string) {
    const datas = await this.findOne(id);

    if (!datas) {
      throw new NotFoundException('data not found');
    }

    return this.repo.remove(datas);
  }
}
