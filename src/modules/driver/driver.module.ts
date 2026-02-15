import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './driver.entity';
import { DriverController } from './driver.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  controllers: [DriverController],
  exports: [TypeOrmModule],
})
export class DriverModule {}
