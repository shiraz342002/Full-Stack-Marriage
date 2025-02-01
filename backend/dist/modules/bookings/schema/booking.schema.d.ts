import mongoose, { Document } from "mongoose";
export type BookingDocument = BookingEntity & Document;
export declare class BookingEntity {
    id: string;
    title: string;
    description: string;
    price: string;
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
    status: string;
    isPaid: Boolean;
    userId: string;
    serviceId: string;
}
declare const BookingSchema: mongoose.Schema<BookingEntity, mongoose.Model<BookingEntity, any, any, any, mongoose.Document<unknown, any, BookingEntity> & BookingEntity & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, BookingEntity, mongoose.Document<unknown, {}, mongoose.FlatRecord<BookingEntity>> & mongoose.FlatRecord<BookingEntity> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export { BookingSchema };
export declare const userJsonSchema: Record<string, import("openapi3-ts").SchemaObject>;
