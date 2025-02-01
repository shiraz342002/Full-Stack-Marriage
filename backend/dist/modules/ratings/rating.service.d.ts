import { Model } from "mongoose";
import { RatingDocument, RatingEntity } from "./schema/rating.schema";
import { UpdateRatingDto } from "./dto/rating.update.dto";
export declare class RatingService {
    private schemaModel;
    constructor(schemaModel: Model<RatingDocument>);
    create(createDto: RatingEntity): Promise<RatingDocument>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    update(id: string, updateDataDto: UpdateRatingDto): Promise<{
        data: import("mongoose").Document<unknown, {}, RatingDocument> & RatingEntity & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, RatingDocument> & RatingEntity & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findByUserId(id: string): Promise<any>;
    findByServiceId(id: string): Promise<any>;
    find(id: string): Promise<any>;
}
