import { ConfigService } from '@nestjs/config';
export declare class RoutingService {
    private configService;
    private readonly logger;
    private readonly mapboxToken;
    private readonly baseUrl;
    constructor(configService: ConfigService);
    getRoute(origin: {
        lat: number;
        lng: number;
    }, destination: {
        lat: number;
        lng: number;
    }): Promise<{
        duration: number;
        distance: number;
        geometry: string;
    }>;
}
