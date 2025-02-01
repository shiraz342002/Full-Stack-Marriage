import { BookingService } from "./booking.service";
import { BookingEntity } from "./schema/booking.schema";
import { User } from "../user/user.schema";
import { UpdateBookingDto } from "./dto/booking-update.dto";
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    create(user: User, createDto: BookingEntity): Promise<import("./schema/booking.schema").BookingDocument>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    update(id: string, updateDatato: UpdateBookingDto): Promise<{
        data: import("mongoose").Document<unknown, {}, import("./schema/booking.schema").BookingDocument> & BookingEntity & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    deleteService(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/booking.schema").BookingDocument> & BookingEntity & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findBooking(id: string): Promise<any>;
    findBookingOfUser(user: User): Promise<any>;
    findBookingOfService(id: string): Promise<any>;
    CheckBooking(user: User, id: string): Promise<any>;
}
