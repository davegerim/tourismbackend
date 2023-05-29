/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile/entities/profile.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { LocationModule } from './location/location.module';
import { Location } from './location/entities/location.entity';
import { CitiesModule } from './cities/cities.module';
import { City } from './cities/entities/city.entity';
import { AttractionplaceModule } from './attractionplace/attractionplace.module';
import { Attractionplace } from './attractionplace/entities/attractionplace.entity';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: [Profile, User, Location, City, Attractionplace],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    ProfileModule,

    UserModule,

    CitiesModule,

    LocationModule,

    AttractionplaceModule,

    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
