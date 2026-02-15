import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from '../state/redis.service';
import { DriverStateService } from '../state/driver-state.service';
import { RoutingService } from '../routing/routing.service';
import { DriverStatus } from '../../common/enums/app.enums';
import { Driver } from '../driver/driver.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MatchingService {
  private readonly logger = new Logger(MatchingService.name);

  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
    private readonly driverStateService: DriverStateService,
    private readonly routingService: RoutingService,
  ) {}

  async findDrivers(rideRequest: {
    pickupLat: number;
    pickupLng: number;
    dropLat: number;
    dropLng: number;
  }): Promise<Driver[]> {
    // 1. Fetch all drivers (this is naive for production, normally use geospatial query in Redis/Postgres)
    // For MVP, we'll fetch from DB and filter by status in Redis.
    const allDrivers = await this.driverRepository.find();
    const eligibleDrivers: Driver[] = [];

    for (const driver of allDrivers) {
      // 2. Filter by ONLINE status
      const status = await this.driverStateService.getStatus(driver.id);
      if (status !== DriverStatus.ONLINE) continue;

      // 3. Filter by Capacity (Active Passengers < 3)
      const activePassengers = await this.driverStateService.getActivePassengers(driver.id);
      if (activePassengers >= 3) continue;

      // 4. (simplified) Check detour/distance
      // In a real scenario, we would calculate the detour time.
      // For MVP, if they have an anchor ride, we skip complex overlap check for now or just log it.
      const anchorRide = await this.driverStateService.getAnchorRide(driver.id);
      if (anchorRide) {
         // TODO: Implement overlap logic
         this.logger.debug(`Driver ${driver.id} has anchor ride ${anchorRide}. Checking overlap...`);
      }

      eligibleDrivers.push(driver);
    }

    return eligibleDrivers;
  }
}
