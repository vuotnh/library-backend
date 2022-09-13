import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose';
import {Book ,BookDocument} from './schemas/book.schema';

@Injectable()
// decorator khai báo cho nest biết đây là 1 Provider
export class BookService{
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

    async createNewBook(book: Book): Promise<Book> {
        const newBook = new this.bookModel(book);
        return newBook.save();
    }

    async getAllBooks(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }

    async getBookById(id): Promise<Book> {
        return this.bookModel.findById(id).exec();
    }

    async updateBook(id, book: Book): Promise<Book>{
        return await this.bookModel.findByIdAndUpdate(id, book, {new: true});
    }

    async removeBook(id): Promise<any>{
        return await this.bookModel.findByIdAndRemove(id);
    }

}