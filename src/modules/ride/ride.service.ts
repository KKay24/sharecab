import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ride } from './ride.entity';
import { CreateRideDto } from './dto/create-ride.dto';
import { RideStatus } from '../../common/enums/app.enums';
import { RealtimeGateway } from '../realtime/realtime.gateway';

@Injectable()
export class RideService {
  private readonly logger = new Logger(RideService.name);

  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,
    private realtimeGateway: RealtimeGateway,
  ) {}

  async create(createRideDto: CreateRideDto): Promise<Ride> {
    const ride = this.rideRepository.create({
      ...createRideDto,
      status: RideStatus.REQUESTED,
    });

    const savedRide = await this.rideRepository.save(ride);
    
    // Notify drivers about the new ride request
    this.realtimeGateway.server.emit('newRideRequest', savedRide);
    this.logger.log(`New ride request created: ${savedRide.id}`);

    return savedRide;
  }

  async findAll(): Promise<Ride[]> {
    return this.rideRepository.find();
  }

  async findOne(id: string): Promise<Ride | null> {
    return this.rideRepository.findOneBy({ id });
  }
}
