import { CreateSocketDto } from './dto/create-socket.dto';
import { SocketDocument } from './socket.schema';
import { Model } from 'mongoose';
export declare class SocketService {
    private socketModel;
    constructor(socketModel: Model<SocketDocument>);
    create(createSocketDto: CreateSocketDto): Promise<any>;
    getAll(id: string): Promise<any>;
    delete(id: string): Promise<any>;
}
