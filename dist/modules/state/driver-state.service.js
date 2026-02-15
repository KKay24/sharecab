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
exports.DriverStateService = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("./redis.service");
let DriverStateService = class DriverStateService {
    redisService;
    constructor(redisService) {
        this.redisService = redisService;
    }
    getKeys(driverId) {
        return {
            status: `driver:${driverId}:status`,
            activePassengers: `driver:${driverId}:active_passengers`,
            anchorRideId: `driver:${driverId}:anchor_ride_id`,
            routePolyline: `driver:${driverId}:route_polyline`,
        };
    }
    async setStatus(driverId, status) {
        await this.redisService.set(this.getKeys(driverId).status, status);
    }
    async getStatus(driverId) {
        const status = await this.redisService.get(this.getKeys(driverId).status);
        return status;
    }
    async setActivePassengers(driverId, count) {
        await this.redisService.set(this.getKeys(driverId).activePassengers, count.toString());
    }
    async getActivePassengers(driverId) {
        const count = await this.redisService.get(this.getKeys(driverId).activePassengers);
        return count ? parseInt(count, 10) : 0;
    }
    async setAnchorRide(driverId, rideId) {
        if (rideId) {
            await this.redisService.set(this.getKeys(driverId).anchorRideId, rideId);
        }
        else {
            await this.redisService.getClient().del(this.getKeys(driverId).anchorRideId);
        }
    }
    async getAnchorRide(driverId) {
        return this.redisService.get(this.getKeys(driverId).anchorRideId);
    }
    async setRoutePolyline(driverId, polyline) {
        await this.redisService.set(this.getKeys(driverId).routePolyline, polyline);
    }
    async getRoutePolyline(driverId) {
        return this.redisService.get(this.getKeys(driverId).routePolyline);
    }
};
exports.DriverStateService = DriverStateService;
exports.DriverStateService = DriverStateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], DriverStateService);
//# sourceMappingURL=driver-state.service.js.map