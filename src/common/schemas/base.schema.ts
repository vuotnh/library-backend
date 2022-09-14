import {Prop, Schema} from '@nestjs/mongoose';
import mongoose, { Document} from 'mongoose';

export type BaseDocument = BaseSchema & Document;

@Schema()
export class BaseSchema {
    @Prop({required: true})
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    @Prop()
    deletedAt: Date;

    @Prop({type: mongoose.Types.ObjectId})
    createdBy: string;

    @Prop({type: mongoose.Types.ObjectId})
    updatedBy: string;

    @Prop({type: mongoose.Types.ObjectId})
    deletedBy: string;
}

