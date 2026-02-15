"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const driver_module_1 = require("./modules/driver/driver.module");
const passenger_module_1 = require("./modules/passenger/passenger.module");
const ride_module_1 = require("./modules/ride/ride.module");
const driver_entity_1 = require("./modules/driver/driver.entity");
const passenger_entity_1 = require("./modules/passenger/passenger.entity");
const ride_entity_1 = require("./modules/ride/ride.entity");
const ride_participant_entity_1 = require("./modules/ride/ride-participant.entity");
const redis_module_1 = require("./modules/state/redis.module");
const realtime_module_1 = require("./modules/realtime/realtime.module");
const routing_module_1 = require("./modules/routing/routing.module");
const matching_module_1 = require("./modules/matching/matching.module");
const auth_module_1 = require("./modules/auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    entities: [driver_entity_1.Driver, passenger_entity_1.Passenger, ride_entity_1.Ride, ride_participant_entity_1.RideParticipant],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            driver_module_1.DriverModule,
            passenger_module_1.PassengerModule,
            ride_module_1.RideModule,
            redis_module_1.RedisModule,
            realtime_module_1.RealtimeModule,
            routing_module_1.RoutingModule,
            matching_module_1.MatchingModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map