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
import { TripreservationService } from './tripreservation.service';
import { CreateTripreservationDto } from './dto/create-tripreservation.dto';
import { UpdateTripreservationDto } from './dto/update-tripreservation.dto';
import { Public } from 'src/auth/jwt-public';
import { Tripreservation } from './entities/tripreservation.entity';
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
    @Body() UpdateTripreservationDto: UpdateTripreservationDto,
  ) {
    return this.tripreservationService.update(+id, UpdateTripreservationDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateDto: UpdateTripreservationDto,
  ): Promise<Tripreservation> {
    try {
      const updatedProfile = await this.tripreservationService.updates(
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
    return this.tripreservationService.remove(id);
  }
}
