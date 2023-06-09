import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { HotelreservationService } from './hotelreservation.service';
import { CreateHotelreservationDto } from './dto/create-hotelreservation.dto';
import { UpdateHotelreservationDto } from './dto/update-hotelreservation.dto';

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

  @Delete('/:id')
  deleteProfile(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.hotelreservationService.remove(id);
  }
}
