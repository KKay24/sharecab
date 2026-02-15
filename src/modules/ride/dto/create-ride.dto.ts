import { IsEnum, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RideType } from '../../../common/enums/app.enums';

export class CreateRideDto {
  @ApiProperty()
  @IsNotEmpty()
  passengerId: string;

  @ApiProperty({ enum: RideType })
  @IsEnum(RideType)
  rideType: RideType;

  @ApiProperty()
  @IsNumber()
  pickupLat: number;

  @ApiProperty()
  @IsNumber()
  pickupLng: number;

  @ApiProperty()
  @IsNumber()
  dropLat: number;

  @ApiProperty()
  @IsNumber()
  dropLng: number;
}
