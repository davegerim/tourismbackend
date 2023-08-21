import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseUUIDPipe,
} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/jwt-public';
import { CreateRoomDto } from './dto/create-room.dto';

@Public()
@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post('/new')
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.create(createHotelDto);
  }

  @Post('/addroom/:id')
  createroom(@Body() createProfile1Dto: CreateRoomDto, id: string) {
    return this.hotelService.createroom(createProfile1Dto, id);
  }

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file, @Body() body) {
    const hotelId = body.hotelId;
    const imageData = file.buffer;
    await this.hotelService.saveImage(hotelId, imageData);
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }
  @Get('/room')
  findAlls() {
    return this.hotelService.findAlls();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelService.update(+id, updateHotelDto);
  }

  @Delete('/:id')
  deleteProfile(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.hotelService.remove(id);
  }
}
