import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TripreservationService } from './tripreservation.service';
import { CreateTripreservationDto } from './dto/create-tripreservation.dto';
import { UpdateTripreservationDto } from './dto/update-tripreservation.dto';
import { Public } from 'src/auth/jwt-public';
@Public()
@Controller('tripreservation')
export class TripreservationController {
  constructor(
    private readonly tripreservationService: TripreservationService,
  ) {}

  @Post('/new')
  create(@Body() createTripreservationDto: CreateTripreservationDto) {
    return this.tripreservationService.create(createTripreservationDto);
  }

  @Get()
  findAll() {
    return this.tripreservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripreservationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTripreservationDto: UpdateTripreservationDto,
  ) {
    return this.tripreservationService.update(+id, updateTripreservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripreservationService.remove(+id);
  }
}
