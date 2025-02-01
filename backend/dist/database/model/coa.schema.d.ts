import { Document } from 'mongoose';
export type COADocument = COA & Document;
export declare class COA {
    key1: string;
    key2: string;
    key3: string;
    key4: string;
    key5: string;
    key6: string;
    headCode: string;
    accountTitle: string;
    headIdFK: string;
    depreciationRate: number;
    date: Date;
    isActive: boolean;
}
declare const COASchema: import("mongoose").Schema<COA, import("mongoose").Model<COA, any, any, any, Document<unknown, any, COA> & COA & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, COA, Document<unknown, {}, import("mongoose").FlatRecord<COA>> & import("mongoose").FlatRecord<COA> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export { COASchema };
