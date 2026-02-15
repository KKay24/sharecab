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
exports.PassengerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passenger_entity_1 = require("./passenger.entity");
let PassengerController = class PassengerController {
    create(createPassengerDto) {
        return 'This action adds a new passenger';
    }
    findAll() {
        return 'This action returns all passengers';
    }
    findOne(id) {
        return `This action returns a #${id} passenger`;
    }
};
exports.PassengerController = PassengerController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new passenger' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The passenger has been successfully created.', type: passenger_entity_1.Passenger }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PassengerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all passengers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all passengers.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PassengerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a passenger by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a passenger.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PassengerController.prototype, "findOne", null);
exports.PassengerController = PassengerController = __decorate([
    (0, swagger_1.ApiTags)('Passenger'),
    (0, common_1.Controller)('passengers')
], PassengerController);
//# sourceMappingURL=passenger.controller.js.map