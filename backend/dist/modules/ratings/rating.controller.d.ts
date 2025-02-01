import { User } from "../user/user.schema";
import { RatingService } from "./rating.service";
import { RatingEntity } from "./schema/rating.schema";
import { UpdateRatingDto } from "./dto/rating.update.dto";
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    create(user: User, createDto: RatingEntity): Promise<import("./schema/rating.schema").RatingDocument>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    update(id: string, updateDatato: UpdateRatingDto): Promise<{
        data: import("mongoose").Document<unknown, {}, import("./schema/rating.schema").RatingDocument> & RatingEntity & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    deleteService(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/rating.schema").RatingDocument> & RatingEntity & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findRating(id: string): Promise<any>;
    findRatingOfUser(user: User): Promise<any>;
    findRatingOfService(id: string): Promise<any>;
}
