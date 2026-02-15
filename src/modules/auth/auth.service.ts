import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DriverStatus } from '../../common/enums/app.enums';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: { id: string; role: 'driver' | 'passenger' }) {
    // In a real app, validate credentials (password/phone/OTP) against DB.
    // For MVP/Mock, we assume the user exists or is just passing an ID.
    
    const payload = { sub: user.id, role: user.role };
    
    // Mock user details based on input
    const mockUser = {
      id: user.id,
      email: `${user.role}_${user.id}@test.com`,
      fullName: `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} ${user.id}`,
      phone: '1234567890',
      role: user.role.toUpperCase(), // Match frontend UserRole enum
      rating: 4.8,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: mockUser,
    };
  }

  async validateUser(payload: any): Promise<any> {
    return { userId: payload.sub, role: payload.role };
  }
}
