import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from 'src/common/schemas/base.schema';

export type BookDocument = Book & Document;
@Schema()
export class Book extends BaseSchema{
    @Prop({required: true, unique: true})
    name: string;

    @Prop({required: true})
    author: string;

    @Prop({required: true})
    numPage: number;

    @Prop({required: true})
    sourceURI: string;

    @Prop()
    coverImageURI: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);