import { Module } from '@nestjs/common';
import { MatchingService } from './matching.service';
import { DriverModule } from '../driver/driver.module';
import { RoutingModule } from '../routing/routing.module';

@Module({
  imports: [DriverModule, RoutingModule],
  providers: [MatchingService],
  exports: [MatchingService],
})
export class MatchingModule {}
