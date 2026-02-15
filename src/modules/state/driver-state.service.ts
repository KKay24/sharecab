import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';
import { DriverStatus } from '../../common/enums/app.enums';

@Injectable()
export class DriverStateService {
  constructor(private readonly redisService: RedisService) {}

  private getKeys(driverId: string) {
    return {
      status: `driver:${driverId}:status`,
      activePassengers: `driver:${driverId}:active_passengers`,
      anchorRideId: `driver:${driverId}:anchor_ride_id`,
      routePolyline: `driver:${driverId}:route_polyline`,
    };
  }

  async setStatus(driverId: string, status: DriverStatus): Promise<void> {
    await this.redisService.set(this.getKeys(driverId).status, status);
  }

  async getStatus(driverId: string): Promise<DriverStatus | null> {
    const status = await this.redisService.get(this.getKeys(driverId).status);
    return status as DriverStatus;
  }

  async setActivePassengers(driverId: string, count: number): Promise<void> {
    await this.redisService.set(this.getKeys(driverId).activePassengers, count.toString());
  }

  async getActivePassengers(driverId: string): Promise<number> {
    const count = await this.redisService.get(this.getKeys(driverId).activePassengers);
    return count ? parseInt(count, 10) : 0;
  }

  async setAnchorRide(driverId: string, rideId: string | null): Promise<void> {
    if (rideId) {
      await this.redisService.set(this.getKeys(driverId).anchorRideId, rideId);
    } else {
      await this.redisService.getClient().del(this.getKeys(driverId).anchorRideId);
    }
  }

  async getAnchorRide(driverId: string): Promise<string | null> {
    return this.redisService.get(this.getKeys(driverId).anchorRideId);
  }

  async setRoutePolyline(driverId: string, polyline: string): Promise<void> {
    await this.redisService.set(this.getKeys(driverId).routePolyline, polyline);
  }

  async getRoutePolyline(driverId: string): Promise<string | null> {
    return this.redisService.get(this.getKeys(driverId).routePolyline);
  }
}
