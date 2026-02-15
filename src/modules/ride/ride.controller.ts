import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RideService } from './ride.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Ride } from './ride.entity';

@ApiTags('Ride')
@Controller('rides')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Post()
  @ApiOperation({ summary: 'Request a new ride' })
  @ApiResponse({ status: 201, description: 'The ride request has been successfully created.', type: Ride })
  create(@Body() createRideDto: CreateRideDto) {
    return this.rideService.create(createRideDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rides' })
  @ApiResponse({ status: 200, description: 'Return all rides.' })
  findAll() {
    // Mock data for RideHistoryScreen
    return [
        {
            id: '1',
            date: 'May 12, 2024, 09:00 AM',
            price: 'K45.00',
            status: 'FINISHED',
            origin: 'Levy Mall, Lusaka',
            destination: 'Manda Hill Shopping Mall',
            car: 'Toyota Corolla - ABC 123',
            driver: 'John Doe'
        },
        {
            id: '2',
            date: 'May 10, 2024, 02:30 PM',
            price: 'K0.00',
            status: 'CANCELLED',
            origin: 'East Park Mall',
            destination: 'Arcades Shopping Mall',
            car: 'Honda Fit - XYZ 789',
            driver: 'Jane Smith'
        },
        {
            id: '3',
            date: 'May 08, 2024, 08:15 AM',
            price: 'K30.00',
            status: 'FINISHED',
            origin: 'Woodlands Stadium',
            destination: 'Crossroads Shopping Mall',
            car: 'Toyota Spacio - LSK 456',
            driver: 'Mike Johnson'
        }
    ];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a ride by id' })
  @ApiResponse({ status: 200, description: 'Return a ride.' })
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} ride`;
  }
}
