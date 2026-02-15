import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './modules/driver/driver.module';
import { PassengerModule } from './modules/passenger/passenger.module';
import { RideModule } from './modules/ride/ride.module';
import { Driver } from './modules/driver/driver.entity';
import { Passenger } from './modules/passenger/passenger.entity';
import { Ride } from './modules/ride/ride.entity';
import { RideParticipant } from './modules/ride/ride-participant.entity';
import { RedisModule } from './modules/state/redis.module';
import { RealtimeModule } from './modules/realtime/realtime.module';
import { RoutingModule } from './modules/routing/routing.module';
import { MatchingModule } from './modules/matching/matching.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Driver, Passenger, Ride, RideParticipant],
        synchronize: true, // Set to false in production
      }),
      inject: [ConfigService],
    }),
    DriverModule,
    PassengerModule,
    RideModule,
    RedisModule,
    RealtimeModule,
    RoutingModule,
    MatchingModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
