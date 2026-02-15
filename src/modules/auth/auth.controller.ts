import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/driver')
  @ApiOperation({ summary: 'Login as a driver' })
  @ApiBody({ schema: { type: 'object', properties: { id: { type: 'string' } } } })
  async loginDriver(@Body('id') id: string) {
    return this.authService.login({ id, role: 'driver' });
  }

  @Post('login/passenger')
  @ApiOperation({ summary: 'Login as a passenger' })
  @ApiBody({ schema: { type: 'object', properties: { id: { type: 'string' } } } })
  async loginPassenger(@Body('id') id: string) {
    return this.authService.login({ id, role: 'passenger' });
  }
}
