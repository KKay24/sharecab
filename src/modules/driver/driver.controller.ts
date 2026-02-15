import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Driver } from './driver.entity';

@ApiTags('Driver')
@Controller('drivers')
export class DriverController {
  @Post()
  @ApiOperation({ summary: 'Create a new driver' })
  @ApiResponse({ status: 201, description: 'The driver has been successfully created.', type: Driver })
  create(@Body() createDriverDto: any) { // Replace 'any' with DTO later
    return 'This action adds a new driver';
  }

  @Get()
  @ApiOperation({ summary: 'Get driver dashboard data (ongoing rides)' })
  @ApiResponse({ status: 200, description: 'Return ongoing rides for driver dashboard.' })
  findAll() {
    // Mock data for DriverDashboardScreen
    return [
        {
            id: '1',
            name: 'Eilen',
            pickupTime: '8:23 AM',
            location: 'Olympia Park Shopping',
            distance: '2.3 km',
            eta: '8:40 AM',
            avatar: 'https://i.pravatar.cc/150?u=eilen',
        },
        {
            id: '2',
            name: 'David',
            pickupTime: '8:10 AM',
            location: 'Levy Mall',
            distance: '5.5 km',
            eta: '8:50 AM',
            avatar: 'https://i.pravatar.cc/150?u=david',
        },
        {
            id: '3',
            name: 'Grace',
            pickupTime: '7:59 AM',
            location: 'Woodlands Stadium',
            distance: '7 km',
            eta: '9:10 AM',
            avatar: 'https://i.pravatar.cc/150?u=grace',
        }
    ];
  }

  @Get('activity')
  @ApiOperation({ summary: 'Get driver activity (awards, earnings)' })
  @ApiResponse({ status: 200, description: 'Return driver activity and awards.' })
  getActivity() {
      // Mock data for ActivityScreen
      return [
        {
            id: '1',
            title: 'First Shared Ride',
            date: 'April 20, 2024',
            reward: 'K30 Reward',
            description: 'For completing your first shared ride',
            iconType: 'AWARD',
            color: '#4CAF50', // Green
        },
        {
            id: '2',
            title: 'Weekly Goal - 10 Rides',
            date: 'April 7, 2024',
            reward: 'K50 Reward',
            description: 'Completed 10 rides this week',
            iconType: 'AWARD',
            color: '#4CAF50',
        },
        {
            id: '3',
            title: '5-Star Driver Bonus',
            date: 'March 23, 2024',
            reward: 'K20 Reward',
            description: 'You rated 5 stars after your ride',
            iconType: 'STAR',
            color: '#FFC107', // Yellow
        },
        {
            id: '4',
            title: 'Refer 4 Friend',
            date: 'March 10, 2024',
            reward: '',
            description: 'John Mwarisa completed his first ride',
            iconType: 'USERS',
            color: '#B0BEC5', // Grey
        }
    ];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a driver by id' })
  @ApiResponse({ status: 200, description: 'Return a driver.' })
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} driver`;
  }
}
