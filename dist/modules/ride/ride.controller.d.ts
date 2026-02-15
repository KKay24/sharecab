import { RideService } from './ride.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { Ride } from './ride.entity';
export declare class RideController {
    private readonly rideService;
    constructor(rideService: RideService);
    create(createRideDto: CreateRideDto): Promise<Ride>;
    findAll(): {
        id: string;
        date: string;
        price: string;
        status: string;
        origin: string;
        destination: string;
        car: string;
        driver: string;
    }[];
    findOne(id: string): string;
}
