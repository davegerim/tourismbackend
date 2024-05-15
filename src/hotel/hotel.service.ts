import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';
import { UpdateRoomDto } from './dto/update-room.dto';

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

    const { hotelName, description, image, cityLocation, hotelType, rating } =
      createProfileDto;
    const hotel = new Hotel();
    hotel.hotelName = hotelName;
    hotel.description = description;
    hotel.cityLocation = cityLocation;
    hotel.hotelType = hotelType;
    hotel.rating = rating;
    hotel.image = image;
    return await this.repo.save(hotel);
  }

  async createroom(createRoomDto: CreateRoomDto, id: string) {
    const {
      roomName,
      bed,
      person,
      area,
      description,
      image,
      image2,
      image3,
      price,
      rate,
      status,
      roomType,
      Hotel1,
    } = createRoomDto;
    const room = new Room();
    room.roomName = roomName;
    room.description = description;
    room.image = image;
    room.image2 = image2;

    room.image3 = image3;

    room.bed = bed;
    room.person = person;
    room.area = area;
    room.price = price;
    room.rate = rate;
    room.status = status;
    room.roomType = roomType;
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

  async updates(id: string, updateDto: UpdateRoomDto): Promise<Room> {
    const profile = await this.roomrepo.findOneBy({ id });

    if (!profile) {
      throw new NotFoundException(`profile with ID $id not found`);
    }

      const updateData: DeepPartial<Room> = {
        status: updateDto.status,
        // Map other properties if needed
      };
    // Update user properties with the values from updateUserDto
    this.roomrepo.merge(profile, updateData);

    return this.roomrepo.save(profile);
  }

  async remove(id: string) {
    const datas = await this.findOne(id);

    if (!datas) {
      throw new NotFoundException('data not found');
    }

    return this.repo.remove(datas);
  }
}
