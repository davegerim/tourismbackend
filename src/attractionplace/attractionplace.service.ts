import { Injectable } from '@nestjs/common';
import { CreateAttractionplaceDto } from './dto/create-attractionplace.dto';
import { UpdateAttractionplaceDto } from './dto/update-attractionplace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Attractionplace } from './entities/attractionplace.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AttractionplaceService {
  constructor(
    @InjectRepository(Attractionplace)
    private readonly repo: Repository<Attractionplace>,
  ) {}
  async create(
    createProfileDto: CreateAttractionplaceDto,
  ): Promise<CreateAttractionplaceDto> {
    const { placeName, description, image, price, rate } = createProfileDto;
    const place = new Attractionplace();
    place.price = price;
    place.rate = rate;
    place.placeName = placeName;
    place.description = description;
    place.image = image;
    return await this.repo.save(place);
  }
  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} attractionplace`;
  }

  update(id: number, updateAttractionplaceDto: UpdateAttractionplaceDto) {
    return `This action updates a #${id} attractionplace`;
  }

  remove(id: number) {
    return `This action removes a #${id} attractionplace`;
  }
}
