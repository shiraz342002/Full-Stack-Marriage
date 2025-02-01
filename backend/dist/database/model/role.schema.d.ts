import { Document } from 'mongoose';
import { Permission } from './permission.schema';
export type RoleDocument = Role & Document;
export declare class Role {
    id: string;
    role: string;
    permissions: [Permission];
}
declare const RoleSchema: import("mongoose").Schema<Role, import("mongoose").Model<Role, any, any, any, Document<unknown, any, Role> & Role & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Role, Document<unknown, {}, import("mongoose").FlatRecord<Role>> & import("mongoose").FlatRecord<Role> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export { RoleSchema };
