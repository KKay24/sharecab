import { Ride } from './ride.entity';
export declare class RideParticipant {
    id: string;
    rideId: string;
    ride: Ride;
    passengerId: string;
    pickupOrder: number;
    dropoffOrder: number;
}
