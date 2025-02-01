import mongoose, { Model } from 'mongoose';
import { ChatDocument, ChatEntity } from './chat.schema';
export declare class ChatService {
    private chatModel;
    constructor(chatModel: Model<ChatDocument>);
    getSenderMessages(senderId: string): Promise<any>;
    getReceiverMessages(receiverId: string): Promise<any>;
    addMessage(senderId: string, message: string, receiverId: string): Promise<any>;
    saveMessage(data: Partial<ChatEntity>): Promise<mongoose.Document<unknown, {}, ChatDocument> & ChatEntity & mongoose.Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getMessagesBetweenUsers(userId1: string, userId2: string): Promise<(mongoose.Document<unknown, {}, ChatDocument> & ChatEntity & mongoose.Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getAllConversationsForUser(userId: string): Promise<any[]>;
}
