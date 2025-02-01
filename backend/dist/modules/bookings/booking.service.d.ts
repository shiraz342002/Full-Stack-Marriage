import { BookingDocument, BookingEntity } from "./schema/booking.schema";
import { Model } from "mongoose";
import { UpdateBookingDto } from "./dto/booking-update.dto";
export declare class BookingService {
    private schemaModel;
    constructor(schemaModel: Model<BookingDocument>);
    create(createDto: BookingEntity): Promise<BookingDocument>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    update(id: string, updateDataDto: UpdateBookingDto): Promise<{
        data: import("mongoose").Document<unknown, {}, BookingDocument> & BookingEntity & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, BookingDocument> & BookingEntity & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findByUserId(id: string): Promise<any>;
    findByServiceId(id: string): Promise<any>;
    findByServiceAndUserId(serviceId: string, userId: string): Promise<any>;
    find(id: string): Promise<any>;
}
