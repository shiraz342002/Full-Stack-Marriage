import { Model } from "mongoose";
import { PageOptionsDto } from "../../common/dto/page-options.dto";
import type { Optional } from "../../types";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "./user.schema";
import { UserSignupDto } from "../auth/dto/user.signup.dto";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    logout(userId: string): Promise<any>;
    getSchema(): Promise<import("openapi3-ts").SchemaObject>;
    getOne(id: string): Promise<User>;
    find(id: string): Promise<User>;
    findOne(findData: any): Promise<User | null>;
    findByEmail(options: Partial<{
        email: string;
    }>): Promise<Optional<User>>;
    generateString(length: any): Promise<string>;
    createUser(userRegisterDto: UserSignupDto): Promise<UserSignupDto>;
    getUsers(pageOptionsDto: PageOptionsDto): Promise<User[]>;
    update(userId: string, userUpdateDto: UpdateUserDto): Promise<{
        data: import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    getProfileData(userId: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    delete(userId: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
}
