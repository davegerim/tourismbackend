import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly repo: Repository<Hotel>,
    @InjectRepository(Room)
    private readonly roomrepo: Repository<Room>,
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

  async createroom(createProfile1Dto: CreateRoomDto, id) {
    console.log(createProfile1Dto);

    const {
      roomName,
      bed,
      person,
      area,
      description,
      image,
      price,
      rate,
      Hotel1,
    } = createProfile1Dto;
    const room = new Room();
    room.roomName = roomName;
    room.description = description;
    room.image = image;
    room.bed = bed;
    room.person = person;
    room.area = area;
    room.price = price;
    room.rate = rate;
    room.Hotel1 = await this.repo.findOneBy({ id: Hotel1 });

    return await this.roomrepo.save(room);
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

  findAlls() {
    return this.roomrepo.find();
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
