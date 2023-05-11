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
    return this.repo.create(createProfileDto);
  }
  findAll() {
    return `This action returns all attractionplace`;
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
