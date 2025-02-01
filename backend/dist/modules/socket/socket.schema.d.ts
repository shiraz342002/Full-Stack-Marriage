import mongoose, { Document } from 'mongoose';
export type SocketDocument = Socket & Document;
export declare class Socket {
    id: string;
    userId: string;
    bookingId: string;
    status: string;
    message: string;
}
declare const SocketSchema: mongoose.Schema<Socket, mongoose.Model<Socket, any, any, any, mongoose.Document<unknown, any, Socket> & Socket & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Socket, mongoose.Document<unknown, {}, mongoose.FlatRecord<Socket>> & mongoose.FlatRecord<Socket> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export { SocketSchema };
export declare const SocketJsonSchema: Record<string, import("openapi3-ts").SchemaObject>;
