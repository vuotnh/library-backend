import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import { Book } from "./schemas/book.schema";
import { BookService } from "./book.service";

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService){}

    @Get()
    async getAllBooks(@Res() response) {
        const books = await this.bookService.getAllBooks();
        return response.status(HttpStatus.OK).json({
            books
        })
    }

    @Get('/:id')
    async getBookById(@Res() response, @Param('id') id) {
        const book = await this.bookService.getBookById(id);
        return response.status(HttpStatus.OK).json({
            book
        })
    }

    @Post()
    async createNewBook(@Res() response, book: Book) {
        const newBook = await this.bookService.createNewBook(book);
        return response.status(HttpStatus.CREATED).json({
            newBook
        })
    }

    @Delete('/:id')
    async deleteBookById(@Res() response, @Param('id') id) {
        const deleteBook = await this.bookService.removeBook(id);
        return response.status(HttpStatus.OK).json({
            deleteBook
        })
    }
}