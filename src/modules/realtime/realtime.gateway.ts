import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    // Handle auth and formatting
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  notifyDriver(driverId: string, event: string, payload: any) {
    this.server.to(`driver:${driverId}`).emit(event, payload);
  }

  notifyPassenger(passengerId: string, event: string, payload: any) {
    this.server.to(`passenger:${passengerId}`).emit(event, payload);
  }
}
