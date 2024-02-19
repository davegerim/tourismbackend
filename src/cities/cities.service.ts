import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  async getAttractionPlace(id: string) {
    //   return `This action updates a #${id} city`;
    var city = await this.repo.findOneBy({ id });
    return city.attractionplace1;
  }
  constructor(
    @InjectRepository(City)
    private readonly repo: Repository<City>,
  ) {}
  async create(createProfileDto: CreateCityDto): Promise<CreateCityDto> {
    console.log(createProfileDto);

    const { cityName, description, image } = createProfileDto;
    const city = new City();
    city.cityName = cityName;
    city.description = description;
    city.image = image;
    return await this.repo.save(city);
  }
  // async saveImage(cityId: number, imageData: string) {
  //   const city = await this.repo.findOne({ where: { id: cityId.toString() } });
  //   city.image = imageData;
  //   await this.repo.save(city);
  // }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  // update(id: number, updateCityDto: UpdateCityDto) {
  //   return `This action updates a #${id} city`;
  // }

  async update(id: string, attrs: Partial<City>) {
    const data = await this.findOne(id);

    if (!data) {
      throw new NotFoundException('profile not found');
    }

    Object.assign(data, attrs);
    return this.repo.save(data);
  }

  // async remove(id: number): Promise<void> {
  //   await this.repo.delete(id);
  // }
  async remove(id: string) {
    const datas = await this.findOne(id);

    if (!datas) {
      throw new NotFoundException('data not found');
    }

    return this.repo.remove(datas);
  }
}
