import mongoose, { Document } from 'mongoose';
export type StripeDocument = Booking & Document;
export declare class Booking {
    id: string;
    userId: string;
    bookingId: string;
    name: string;
    price: Number;
}
declare const StripeSchema: mongoose.Schema<Booking, mongoose.Model<Booking, any, any, any, mongoose.Document<unknown, any, Booking> & Booking & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Booking, mongoose.Document<unknown, {}, mongoose.FlatRecord<Booking>> & mongoose.FlatRecord<Booking> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export { StripeSchema };
export declare const StripeJsonSchema: Record<string, import("openapi3-ts").SchemaObject>;
