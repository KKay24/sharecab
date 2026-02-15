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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var RoutingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
let RoutingService = RoutingService_1 = class RoutingService {
    configService;
    logger = new common_1.Logger(RoutingService_1.name);
    mapboxToken;
    baseUrl = 'https://api.mapbox.com/directions/v5/mapbox/driving';
    constructor(configService) {
        this.configService = configService;
        this.mapboxToken = this.configService.get('MAPBOX_TOKEN') || '';
    }
    async getRoute(origin, destination) {
        try {
            if (!this.mapboxToken || this.mapboxToken === 'pk.placeholder') {
                this.logger.warn('Mapbox token is missing or invalid. Returning mock data.');
                return { duration: 600, distance: 5000, geometry: 'mock_geometry' };
            }
            const coordinates = `${origin.lng},${origin.lat};${destination.lng},${destination.lat}`;
            const url = `${this.baseUrl}/${coordinates}?access_token=${this.mapboxToken}&geometries=polyline`;
            const response = await axios_1.default.get(url);
            const route = response.data.routes[0];
            return {
                duration: route.duration,
                distance: route.distance,
                geometry: route.geometry,
            };
        }
        catch (error) {
            this.logger.error('Error fetching route from Mapbox', error);
            throw error;
        }
    }
};
exports.RoutingService = RoutingService;
exports.RoutingService = RoutingService = RoutingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RoutingService);
//# sourceMappingURL=routing.service.js.map