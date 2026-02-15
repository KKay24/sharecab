import { RideStatus, RideType } from '../../common/enums/app.enums';
import { RideParticipant } from './ride-participant.entity';
export declare class Ride {
    id: string;
    driverId: string;
    passengerId: string;
    rideType: RideType;
    status: RideStatus;
    isAnchor: boolean;
    pickupLat: number;
    pickupLng: number;
    dropLat: number;
    dropLng: number;
    createdAt: Date;
    participants: RideParticipant[];
}
