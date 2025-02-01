import { Document } from "mongoose";
export type UserDocument = User & Document;
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    about: string;
    role: string;
    avatar: string;
    phone: string;
}
declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export { UserSchema };
export declare const userJsonSchema: Record<string, import("openapi3-ts").SchemaObject>;
