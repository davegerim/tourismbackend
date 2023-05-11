import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttractionplaceService } from './attractionplace.service';
import { CreateAttractionplaceDto } from './dto/create-attractionplace.dto';
import { UpdateAttractionplaceDto } from './dto/update-attractionplace.dto';

@Controller('attractionplace')
export class AttractionplaceController {
  constructor(
    private readonly attractionplaceService: AttractionplaceService,
  ) {}

  @Post('/new')
  create(@Body() createAttractionplaceDto: CreateAttractionplaceDto) {
    return this.attractionplaceService.create(createAttractionplaceDto);
  }

  @Get()
  findAll() {
    return this.attractionplaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attractionplaceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttractionplaceDto: UpdateAttractionplaceDto,
  ) {
    return this.attractionplaceService.update(+id, updateAttractionplaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attractionplaceService.remove(+id);
  }
}
