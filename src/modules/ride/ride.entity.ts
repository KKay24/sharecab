import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { RideStatus, RideType } from '../../common/enums/app.enums';
import { RideParticipant } from './ride-participant.entity';

@Entity('rides')
export class Ride {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ name: 'driver_id', nullable: true })
  driverId: string;

  @ApiProperty()
  @Column({ name: 'passenger_id' })
  passengerId: string;

  @ApiProperty({ enum: RideType })
  @Column({
    type: 'enum',
    enum: RideType,
    name: 'ride_type',
  })
  rideType: RideType;

  @ApiProperty({ enum: RideStatus })
  @Column({
    type: 'enum',
    enum: RideStatus,
  })
  status: RideStatus;

  @ApiProperty()
  @Column({ name: 'is_anchor', default: false })
  isAnchor: boolean;

  @ApiProperty()
  @Column('float', { name: 'pickup_lat' })
  pickupLat: number;

  @ApiProperty()
  @Column('float', { name: 'pickup_lng' })
  pickupLng: number;

  @ApiProperty()
  @Column('float', { name: 'drop_lat' })
  dropLat: number;

  @ApiProperty()
  @Column('float', { name: 'drop_lng' })
  dropLng: number;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => RideParticipant, (participant) => participant.ride)
  participants: RideParticipant[];
}
