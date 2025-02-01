import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.schema";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    update(user: User, avatar: Express.Multer.File, userUpdateDto: UpdateUserDto): Promise<{
        data: import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    deleteAccount(user: User): Promise<import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    findOne(id: string): Promise<User>;
}
