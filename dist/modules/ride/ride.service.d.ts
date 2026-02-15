import { Repository } from 'typeorm';
import { Ride } from './ride.entity';
import { CreateRideDto } from './dto/create-ride.dto';
import { RealtimeGateway } from '../realtime/realtime.gateway';
export declare class RideService {
    private rideRepository;
    private realtimeGateway;
    private readonly logger;
    constructor(rideRepository: Repository<Ride>, realtimeGateway: RealtimeGateway);
    create(createRideDto: CreateRideDto): Promise<Ride>;
    findAll(): Promise<Ride[]>;
    findOne(id: string): Promise<Ride | null>;
}
