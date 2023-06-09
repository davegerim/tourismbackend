import { Module } from '@nestjs/common';
import { AttractionplaceService } from './attractionplace.service';
import { AttractionplaceController } from './attractionplace.controller';
import { Attractionplace } from './entities/attractionplace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesModule } from 'src/cities/cities.module';
import { City } from 'src/cities/entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attractionplace, City])],
  controllers: [AttractionplaceController],
  providers: [AttractionplaceService],
})
export class AttractionplaceModule {}
