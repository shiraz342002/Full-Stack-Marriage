import { ServiceService } from "./services.service";
import { ServiceEntity } from "./schema/service.schema";
import { User } from "../user/user.schema";
import { UpdateServiceDto } from "./dto/service-update.dto";
import { FilterDto } from "./dto/filter.service.dto";
import { LocationDto } from "./dto/location.dto";
import { SearchDto } from "./dto/search.dto";
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
    create(user: User, image: Express.Multer.File[], createDto: ServiceEntity): Promise<import("./schema/service.schema").ServiceDocument>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    update(id: string, image: Express.Multer.File[], updateDatato: UpdateServiceDto): Promise<{
        data: import("mongoose").Document<unknown, {}, import("./schema/service.schema").ServiceDocument> & ServiceEntity & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    deleteService(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/service.schema").ServiceDocument> & ServiceEntity & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getWithinRadius(locationDto: LocationDto): Promise<any>;
    searchByName(searchDto: SearchDto): Promise<any>;
    searchByCategory(searchDto: SearchDto): Promise<any>;
    filteredEvents(filterDto: FilterDto): Promise<any>;
    findBooking(id: string): Promise<any>;
    findBookingOfUser(id: string): Promise<any>;
}
