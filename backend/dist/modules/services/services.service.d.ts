import { ServiceDocument, ServiceEntity } from "./schema/service.schema";
import { Model } from "mongoose";
import { UpdateServiceDto } from "./dto/service-update.dto";
import { LocationDto } from "./dto/location.dto";
import { SearchDto } from "./dto/search.dto";
import { FilterDto } from "./dto/filter.service.dto";
export declare class ServiceService {
    private schemaModel;
    constructor(schemaModel: Model<ServiceDocument>);
    create(createDto: ServiceEntity): Promise<ServiceDocument>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    update(id: string, updateDataDto: UpdateServiceDto): Promise<{
        data: import("mongoose").Document<unknown, {}, ServiceDocument> & ServiceEntity & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    deleteService(id: string): Promise<import("mongoose").Document<unknown, {}, ServiceDocument> & ServiceEntity & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getWithinRadius(locationDto: LocationDto): Promise<any>;
    searchByName(searchDto: SearchDto): Promise<any>;
    searchByCategory(searchDto: SearchDto): Promise<any>;
    filterEvents(filterDto: FilterDto): Promise<any>;
    findByUserId(id: string): Promise<any>;
    find(id: string): Promise<any>;
}
