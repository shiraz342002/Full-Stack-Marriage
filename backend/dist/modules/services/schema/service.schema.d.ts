import mongoose, { Document } from "mongoose";
export type ServiceDocument = ServiceEntity & Document;
export declare class ServiceEntity {
    id: string;
    title: string;
    email: string;
    description: string;
    category: string;
    price: string;
    country: string;
    city: string;
    zipcode: string;
    address: string;
    venueDetails?: {
        capacity?: string;
        type?: string;
        eventTypes?: string[];
    };
    cateringDetails?: {
        cuisineTypes?: string[];
        foodTastingAvailable?: boolean;
        serviceStyle?: string;
    };
    photographerDetails?: {
        coverage?: string;
        deliveryTime?: string;
        equipmentDetails?: string[];
    };
    carRentalDetails?: {
        vehicleOptions?: string[];
        rentalDuration?: string;
        driverAvailability?: boolean;
    };
    bridalMakeupDetails?: {
        makeupStyles?: string[];
        brandsUsed?: string[];
        trialSessionsAvailable?: boolean;
        additionalServices?: string[];
    };
    decorDetails?: {
        themeOptions?: string[];
        setupTime?: string;
        customizationAvailable?: boolean;
    };
    hennaArtistDetails?: {
        designTypes?: string[];
        materialsUsed?: string;
        teamAvailability?: boolean;
    };
    bridalWearDetails?: {
        collectionDetails?: string[];
        fittingsAvailable?: boolean;
        deliveryTime?: string;
    };
    invitationsDetails?: {
        designOptions?: string[];
        customizationAvailable?: boolean;
        deliveryOptions?: string[];
    };
    singerDetails?: {
        performanceStyle?: string;
        repertoire?: string[];
        duration?: string;
    };
    choreographerDetails?: {
        danceStyles?: string[];
        groupSize?: string;
        sessionsOffered?: string;
    };
    image?: string[];
    location?: {
        type: string;
        coordinates: [number, number];
    };
    userId?: string;
}
declare const ServiceSchema: mongoose.Schema<ServiceEntity, mongoose.Model<ServiceEntity, any, any, any, mongoose.Document<unknown, any, ServiceEntity> & ServiceEntity & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ServiceEntity, mongoose.Document<unknown, {}, mongoose.FlatRecord<ServiceEntity>> & mongoose.FlatRecord<ServiceEntity> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export { ServiceSchema };
export declare const userJsonSchema: Record<string, import("openapi3-ts").SchemaObject>;
