import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { HotelreservationService } from './hotelreservation.service';
import { CreateHotelreservationDto } from './dto/create-hotelreservation.dto';
import { UpdateHotelreservationDto } from './dto/update-hotelreservation.dto';
import { Public } from 'src/auth/jwt-public';
import { Hotelreservation } from './entities/hotelreservation.entity';
@Public()
@Controller('hotelreservation')
export class HotelreservationController {
  constructor(
    private readonly hotelreservationService: HotelreservationService,
  ) {}

  @Post('/new')
  create(@Body() createHotelreservationDto: CreateHotelreservationDto) {
    return this.hotelreservationService.create(createHotelreservationDto);
  }

  @Get()
  findAll() {
    return this.hotelreservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelreservationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHotelreservationDto: UpdateHotelreservationDto,
  ) {
    return this.hotelreservationService.update(+id, updateHotelreservationDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateDto: UpdateHotelreservationDto,
  ): Promise<Hotelreservation> {
    try {
      const updatedProfile = await this.hotelreservationService.updates(
        id,
        updateDto,
      );
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
    return this.hotelreservationService.remove(id);
  }
}
