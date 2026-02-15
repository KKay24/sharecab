import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class RoutingService {
  private readonly logger = new Logger(RoutingService.name);
  private readonly mapboxToken: string;
  private readonly baseUrl = 'https://api.mapbox.com/directions/v5/mapbox/driving';

  constructor(private configService: ConfigService) {
    this.mapboxToken = this.configService.get<string>('MAPBOX_TOKEN') || '';
  }

  async getRoute(
    origin: { lat: number; lng: number },
    destination: { lat: number; lng: number },
  ): Promise<{ duration: number; distance: number; geometry: string }> {
    try {
      if (!this.mapboxToken || this.mapboxToken === 'pk.placeholder') {
        this.logger.warn('Mapbox token is missing or invalid. Returning mock data.');
        return { duration: 600, distance: 5000, geometry: 'mock_geometry' };
      }

      const coordinates = `${origin.lng},${origin.lat};${destination.lng},${destination.lat}`;
      const url = `${this.baseUrl}/${coordinates}?access_token=${this.mapboxToken}&geometries=polyline`;

      const response = await axios.get(url);
      const route = response.data.routes[0];

      return {
        duration: route.duration,
        distance: route.distance,
        geometry: route.geometry,
      };
    } catch (error) {
      this.logger.error('Error fetching route from Mapbox', error);
      throw error;
    }
  }
}
