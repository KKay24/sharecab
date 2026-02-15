import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ride } from './ride.entity';
import { RideParticipant } from './ride-participant.entity';
import { RideController } from './ride.controller';
import { RideService } from './ride.service';
import { RealtimeModule } from '../realtime/realtime.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ride, RideParticipant]), RealtimeModule],
  controllers: [RideController],
  providers: [RideService],
  exports: [TypeOrmModule],
})
export class RideModule {}
