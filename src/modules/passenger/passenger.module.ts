import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passenger } from './passenger.entity';
import { PassengerController } from './passenger.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Passenger])],
  controllers: [PassengerController],
  exports: [TypeOrmModule],
})
export class PassengerModule {}
