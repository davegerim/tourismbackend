import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/jwt-public';

@Public()
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post('/new')
  create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }
  // @Post('upload-image')
  // @UseInterceptors(FileInterceptor('image'))
  // async uploadImage(@UploadedFile() file, @Body() body) {
  //   const cityId = body.cityId;
  //   const imageData = file.buffer;
  //   await this.citiesService.saveImage(cityId, imageData);
  // }

  @Get()
  findAll() {
    return this.citiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citiesService.findOne(id);
  }

  @Get('/attractionPlace/:id')
  findOneByCity(@Param('id') id: string) {
    return this.citiesService.getAttractionPlace(id);
  }

  @Patch('/:id')
  updateProfile(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateCityDto,
  ) {
    return this.citiesService.update(id.toString(), dto);
  }

  @Delete('/:id')
  deleteProfile(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.citiesService.remove(id);
  }
}
