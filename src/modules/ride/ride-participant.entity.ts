import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Ride } from './ride.entity';

@Entity('ride_participants')
export class RideParticipant {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ name: 'ride_id' })
  rideId: string;

  @ManyToOne(() => Ride, (ride) => ride.participants)
  @JoinColumn({ name: 'ride_id' })
  ride: Ride;

  @ApiProperty()
  @Column({ name: 'passenger_id' })
  passengerId: string;

  @ApiProperty()
  @Column({ name: 'pickup_order', type: 'int' })
  pickupOrder: number;

  @ApiProperty()
  @Column({ name: 'dropoff_order', type: 'int' })
  dropoffOrder: number;
}
