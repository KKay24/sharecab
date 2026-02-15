import { DriverStateService } from '../state/driver-state.service';
import { RoutingService } from '../routing/routing.service';
import { Driver } from '../driver/driver.entity';
import { Repository } from 'typeorm';
export declare class MatchingService {
    private readonly driverRepository;
    private readonly driverStateService;
    private readonly routingService;
    private readonly logger;
    constructor(driverRepository: Repository<Driver>, driverStateService: DriverStateService, routingService: RoutingService);
    findDrivers(rideRequest: {
        pickupLat: number;
        pickupLng: number;
        dropLat: number;
        dropLng: number;
    }): Promise<Driver[]>;
}
