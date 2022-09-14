import * as Joi from 'joi';

export const CreateBookSchema = Joi.object({
    name: Joi.string().required(),
    author: Joi.string().required(),
    numPage: Joi.number().required(),
    sourceURI: Joi.string().required(),
    coverImageURI: Joi.string(),
    createdAt: Joi.date().required(),
})

export class CreateBookDTO{
    readonly name: string;
    readonly author: string;
    readonly numPage: number;
    sourceURI: string;
    coverImageURI: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    readonly createdBy: string;
    updatedBy: string;
    deletedBy: string;
}