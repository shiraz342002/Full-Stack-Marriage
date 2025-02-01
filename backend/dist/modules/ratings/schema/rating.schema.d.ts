import mongoose, { Document } from "mongoose";
export type RatingDocument = RatingEntity & Document;
export declare class RatingEntity {
    id: string;
    comment: string;
    rating: number;
    userId: string;
    serviceId: string;
    bookingId: string;
}
declare const RatingSchema: mongoose.Schema<RatingEntity, mongoose.Model<RatingEntity, any, any, any, mongoose.Document<unknown, any, RatingEntity> & RatingEntity & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, RatingEntity, mongoose.Document<unknown, {}, mongoose.FlatRecord<RatingEntity>> & mongoose.FlatRecord<RatingEntity> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export { RatingSchema };
export declare const userJsonSchema: Record<string, import("openapi3-ts").SchemaObject>;
