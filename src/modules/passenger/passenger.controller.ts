import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Passenger } from './passenger.entity';

@ApiTags('Passenger')
@Controller('passengers')
export class PassengerController {
  @Post()
  @ApiOperation({ summary: 'Create a new passenger' })
  @ApiResponse({ status: 201, description: 'The passenger has been successfully created.', type: Passenger })
  create(@Body() createPassengerDto: any) {
    return 'This action adds a new passenger';
  }

  @Get()
  @ApiOperation({ summary: 'Get all passengers' })
  @ApiResponse({ status: 200, description: 'Return all passengers.' })
  findAll() {
    return 'This action returns all passengers';
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a passenger by id' })
  @ApiResponse({ status: 200, description: 'Return a passenger.' })
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} passenger`;
  }
}
