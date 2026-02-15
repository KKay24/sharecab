import { Module, Global } from '@nestjs/common';
import { RoutingService } from './routing.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule],
  providers: [RoutingService],
  exports: [RoutingService],
})
export class RoutingModule {}
