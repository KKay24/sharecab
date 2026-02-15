import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    login(user: {
        id: string;
        role: 'driver' | 'passenger';
    }): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            fullName: string;
            phone: string;
            role: string;
            rating: number;
        };
    }>;
    validateUser(payload: any): Promise<any>;
}
