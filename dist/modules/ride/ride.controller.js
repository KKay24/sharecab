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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideController = void 0;
const common_1 = require("@nestjs/common");
const ride_service_1 = require("./ride.service");
const create_ride_dto_1 = require("./dto/create-ride.dto");
const swagger_1 = require("@nestjs/swagger");
const ride_entity_1 = require("./ride.entity");
let RideController = class RideController {
    rideService;
    constructor(rideService) {
        this.rideService = rideService;
    }
    create(createRideDto) {
        return this.rideService.create(createRideDto);
    }
    findAll() {
        return [
            {
                id: '1',
                date: 'May 12, 2024, 09:00 AM',
                price: 'K45.00',
                status: 'FINISHED',
                origin: 'Levy Mall, Lusaka',
                destination: 'Manda Hill Shopping Mall',
                car: 'Toyota Corolla - ABC 123',
                driver: 'John Doe'
            },
            {
                id: '2',
                date: 'May 10, 2024, 02:30 PM',
                price: 'K0.00',
                status: 'CANCELLED',
                origin: 'East Park Mall',
                destination: 'Arcades Shopping Mall',
                car: 'Honda Fit - XYZ 789',
                driver: 'Jane Smith'
            },
            {
                id: '3',
                date: 'May 08, 2024, 08:15 AM',
                price: 'K30.00',
                status: 'FINISHED',
                origin: 'Woodlands Stadium',
                destination: 'Crossroads Shopping Mall',
                car: 'Toyota Spacio - LSK 456',
                driver: 'Mike Johnson'
            }
        ];
    }
    findOne(id) {
        return `This action returns a #${id} ride`;
    }
};
exports.RideController = RideController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Request a new ride' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The ride request has been successfully created.', type: ride_entity_1.Ride }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ride_dto_1.CreateRideDto]),
    __metadata("design:returntype", void 0)
], RideController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all rides' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all rides.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RideController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a ride by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a ride.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RideController.prototype, "findOne", null);
exports.RideController = RideController = __decorate([
    (0, swagger_1.ApiTags)('Ride'),
    (0, common_1.Controller)('rides'),
    __metadata("design:paramtypes", [ride_service_1.RideService])
], RideController);
//# sourceMappingURL=ride.controller.js.map