import { RideType } from '../../../common/enums/app.enums';
export declare class CreateRideDto {
    passengerId: string;
    rideType: RideType;
    pickupLat: number;
    pickupLng: number;
    dropLat: number;
    dropLng: number;
}
