import { User } from "../user/user.schema";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/user.login.dto";
import { TokenPayloadDto } from "./dto/TokenPayloadDto";
import { UserSignupDto } from "./dto/user.signup.dto";
import { ServiceService } from "../services/services.service";
import { BookingService } from "../bookings/booking.service";
import { SocketService } from "../socket/socket.service";
export declare class AuthController {
    private userService;
    private authService;
    private serviceService;
    private bookingService;
    private socketService;
    loggerService: any;
    constructor(userService: UserService, authService: AuthService, serviceService: ServiceService, bookingService: BookingService, socketService: SocketService);
    generateString(length: any): Promise<string>;
    userLogin(userLoginDto: UserLoginDto): Promise<TokenPayloadDto>;
    userRegister(userRegisterDto: UserSignupDto): Promise<UserSignupDto>;
    getCurrentUser(user: User): Promise<{
        profile: import("mongoose").Document<unknown, {}, import("../user/user.schema").UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        services: any;
        booking: any;
        notify: any;
    }>;
    logOut(user: User): Promise<any>;
}
