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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MatchingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchingService = void 0;
const common_1 = require("@nestjs/common");
const driver_state_service_1 = require("../state/driver-state.service");
const routing_service_1 = require("../routing/routing.service");
const app_enums_1 = require("../../common/enums/app.enums");
const driver_entity_1 = require("../driver/driver.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MatchingService = MatchingService_1 = class MatchingService {
    driverRepository;
    driverStateService;
    routingService;
    logger = new common_1.Logger(MatchingService_1.name);
    constructor(driverRepository, driverStateService, routingService) {
        this.driverRepository = driverRepository;
        this.driverStateService = driverStateService;
        this.routingService = routingService;
    }
    async findDrivers(rideRequest) {
        const allDrivers = await this.driverRepository.find();
        const eligibleDrivers = [];
        for (const driver of allDrivers) {
            const status = await this.driverStateService.getStatus(driver.id);
            if (status !== app_enums_1.DriverStatus.ONLINE)
                continue;
            const activePassengers = await this.driverStateService.getActivePassengers(driver.id);
            if (activePassengers >= 3)
                continue;
            const anchorRide = await this.driverStateService.getAnchorRide(driver.id);
            if (anchorRide) {
                this.logger.debug(`Driver ${driver.id} has anchor ride ${anchorRide}. Checking overlap...`);
            }
            eligibleDrivers.push(driver);
        }
        return eligibleDrivers;
    }
};
exports.MatchingService = MatchingService;
exports.MatchingService = MatchingService = MatchingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(driver_entity_1.Driver)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        driver_state_service_1.DriverStateService,
        routing_service_1.RoutingService])
], MatchingService);
//# sourceMappingURL=matching.service.js.map