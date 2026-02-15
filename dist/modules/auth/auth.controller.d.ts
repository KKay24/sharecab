import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginDriver(id: string): Promise<{
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
    loginPassenger(id: string): Promise<{
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
}
