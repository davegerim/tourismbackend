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
import { HotelModule } from './hotel/hotel.module';
import { Hotel } from './hotel/entities/hotel.entity';
import { HotelreservationModule } from './hotelreservation/hotelreservation.module';
import { Hotelreservation } from './hotelreservation/entities/hotelreservation.entity';
import { FlightModule } from './flight/flight.module';
import { Flight } from './flight/entities/flight.entity';
import { TripreservationModule } from './tripreservation/tripreservation.module';
import { Tripreservation } from './tripreservation/entities/tripreservation.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';

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
        entities: [
          Profile,
          User,
          Location,
          City,
          Attractionplace,
          Hotel,
          Hotelreservation,
          Flight,
          Tripreservation,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ProfileModule,

    UserModule,

    CitiesModule,

    LocationModule,

    AttractionplaceModule,

    BookingModule,

    HotelModule,

    HotelreservationModule,

    FlightModule,
    AuthModule,

    TripreservationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,

    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
