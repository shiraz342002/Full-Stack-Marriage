import mongoose, { Document } from "mongoose";
export type ChatDocument = ChatEntity & Document;
export declare class ChatEntity {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: Date;
}
declare const ChatSchema: mongoose.Schema<ChatEntity, mongoose.Model<ChatEntity, any, any, any, mongoose.Document<unknown, any, ChatEntity> & ChatEntity & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ChatEntity, mongoose.Document<unknown, {}, mongoose.FlatRecord<ChatEntity>> & mongoose.FlatRecord<ChatEntity> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export { ChatSchema };
export declare const userJsonSchema: Record<string, import("openapi3-ts").SchemaObject>;
