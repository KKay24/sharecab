import { RedisService } from './redis.service';
import { DriverStatus } from '../../common/enums/app.enums';
export declare class DriverStateService {
    private readonly redisService;
    constructor(redisService: RedisService);
    private getKeys;
    setStatus(driverId: string, status: DriverStatus): Promise<void>;
    getStatus(driverId: string): Promise<DriverStatus | null>;
    setActivePassengers(driverId: string, count: number): Promise<void>;
    getActivePassengers(driverId: string): Promise<number>;
    setAnchorRide(driverId: string, rideId: string | null): Promise<void>;
    getAnchorRide(driverId: string): Promise<string | null>;
    setRoutePolyline(driverId: string, polyline: string): Promise<void>;
    getRoutePolyline(driverId: string): Promise<string | null>;
}
