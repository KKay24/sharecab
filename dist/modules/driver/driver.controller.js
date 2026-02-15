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
exports.DriverController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const driver_entity_1 = require("./driver.entity");
let DriverController = class DriverController {
    create(createDriverDto) {
        return 'This action adds a new driver';
    }
    findAll() {
        return [
            {
                id: '1',
                name: 'Eilen',
                pickupTime: '8:23 AM',
                location: 'Olympia Park Shopping',
                distance: '2.3 km',
                eta: '8:40 AM',
                avatar: 'https://i.pravatar.cc/150?u=eilen',
            },
            {
                id: '2',
                name: 'David',
                pickupTime: '8:10 AM',
                location: 'Levy Mall',
                distance: '5.5 km',
                eta: '8:50 AM',
                avatar: 'https://i.pravatar.cc/150?u=david',
            },
            {
                id: '3',
                name: 'Grace',
                pickupTime: '7:59 AM',
                location: 'Woodlands Stadium',
                distance: '7 km',
                eta: '9:10 AM',
                avatar: 'https://i.pravatar.cc/150?u=grace',
            }
        ];
    }
    getActivity() {
        return [
            {
                id: '1',
                title: 'First Shared Ride',
                date: 'April 20, 2024',
                reward: 'K30 Reward',
                description: 'For completing your first shared ride',
                iconType: 'AWARD',
                color: '#4CAF50',
            },
            {
                id: '2',
                title: 'Weekly Goal - 10 Rides',
                date: 'April 7, 2024',
                reward: 'K50 Reward',
                description: 'Completed 10 rides this week',
                iconType: 'AWARD',
                color: '#4CAF50',
            },
            {
                id: '3',
                title: '5-Star Driver Bonus',
                date: 'March 23, 2024',
                reward: 'K20 Reward',
                description: 'You rated 5 stars after your ride',
                iconType: 'STAR',
                color: '#FFC107',
            },
            {
                id: '4',
                title: 'Refer 4 Friend',
                date: 'March 10, 2024',
                reward: '',
                description: 'John Mwarisa completed his first ride',
                iconType: 'USERS',
                color: '#B0BEC5',
            }
        ];
    }
    findOne(id) {
        return `This action returns a #${id} driver`;
    }
};
exports.DriverController = DriverController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new driver' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The driver has been successfully created.', type: driver_entity_1.Driver }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get driver dashboard data (ongoing rides)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return ongoing rides for driver dashboard.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('activity'),
    (0, swagger_1.ApiOperation)({ summary: 'Get driver activity (awards, earnings)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return driver activity and awards.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "getActivity", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a driver by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a driver.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "findOne", null);
exports.DriverController = DriverController = __decorate([
    (0, swagger_1.ApiTags)('Driver'),
    (0, common_1.Controller)('drivers')
], DriverController);
//# sourceMappingURL=driver.controller.js.map