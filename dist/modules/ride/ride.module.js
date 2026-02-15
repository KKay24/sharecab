"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ride_entity_1 = require("./ride.entity");
const ride_participant_entity_1 = require("./ride-participant.entity");
const ride_controller_1 = require("./ride.controller");
const ride_service_1 = require("./ride.service");
const realtime_module_1 = require("../realtime/realtime.module");
let RideModule = class RideModule {
};
exports.RideModule = RideModule;
exports.RideModule = RideModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ride_entity_1.Ride, ride_participant_entity_1.RideParticipant]), realtime_module_1.RealtimeModule],
        controllers: [ride_controller_1.RideController],
        providers: [ride_service_1.RideService],
        exports: [typeorm_1.TypeOrmModule],
    })
], RideModule);
//# sourceMappingURL=ride.module.js.map