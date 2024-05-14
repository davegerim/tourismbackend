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
  Put,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/jwt-public';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';
import { UpdateRoomDto } from './dto/update-room.dto';

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

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateDto: UpdateRoomDto,
  ): Promise<Room> {
    try {
      const updatedProfile = await this.hotelService.updates(id, updateDto);
      return updatedProfile;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  @Delete('/:id')
  deleteProfile(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.hotelService.remove(id);
  }
}
