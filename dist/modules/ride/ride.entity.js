"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const app_enums_1 = require("../../common/enums/app.enums");
const ride_participant_entity_1 = require("./ride-participant.entity");
let Ride = class Ride {
    id;
    driverId;
    passengerId;
    rideType;
    status;
    isAnchor;
    pickupLat;
    pickupLng;
    dropLat;
    dropLng;
    createdAt;
    participants;
};
exports.Ride = Ride;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Ride.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'driver_id', nullable: true }),
    __metadata("design:type", String)
], Ride.prototype, "driverId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'passenger_id' }),
    __metadata("design:type", String)
], Ride.prototype, "passengerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: app_enums_1.RideType }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: app_enums_1.RideType,
        name: 'ride_type',
    }),
    __metadata("design:type", String)
], Ride.prototype, "rideType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: app_enums_1.RideStatus }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: app_enums_1.RideStatus,
    }),
    __metadata("design:type", String)
], Ride.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'is_anchor', default: false }),
    __metadata("design:type", Boolean)
], Ride.prototype, "isAnchor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('float', { name: 'pickup_lat' }),
    __metadata("design:type", Number)
], Ride.prototype, "pickupLat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('float', { name: 'pickup_lng' }),
    __metadata("design:type", Number)
], Ride.prototype, "pickupLng", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('float', { name: 'drop_lat' }),
    __metadata("design:type", Number)
], Ride.prototype, "dropLat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('float', { name: 'drop_lng' }),
    __metadata("design:type", Number)
], Ride.prototype, "dropLng", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Ride.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ride_participant_entity_1.RideParticipant, (participant) => participant.ride),
    __metadata("design:type", Array)
], Ride.prototype, "participants", void 0);
exports.Ride = Ride = __decorate([
    (0, typeorm_1.Entity)('rides')
], Ride);
//# sourceMappingURL=ride.entity.js.map