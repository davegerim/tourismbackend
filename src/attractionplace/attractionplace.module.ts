import { Module } from '@nestjs/common';
import { AttractionplaceService } from './attractionplace.service';
import { AttractionplaceController } from './attractionplace.controller';
import { Attractionplace } from './entities/attractionplace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Attractionplace])],
  controllers: [AttractionplaceController],
  providers: [AttractionplaceService],
})
export class AttractionplaceModule {}
