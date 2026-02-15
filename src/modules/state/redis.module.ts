import { Module, Global } from '@nestjs/common';
import { RedisService } from './redis.service';
import { DriverStateService } from './driver-state.service';

@Global()
@Module({
  providers: [RedisService, DriverStateService],
  exports: [RedisService, DriverStateService],
})
export class RedisModule {}
