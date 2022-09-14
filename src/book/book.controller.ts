import {Body, Controller, Delete, Get, HttpStatus, InternalServerErrorException, Param, Post, Put, Req, Res} from "@nestjs/common";
import { Book } from "./schemas/book.schema";
import { BookService } from "./book.service";
import { CreateBookDTO } from "./dto/create-book.dto";

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
    async createNewBook(@Res() response, @Req() req, @Body() createBookDto: CreateBookDTO) {
        try{
            createBookDto.createdAt = new Date(Date.now());
            const newBook = await this.bookService.createNewBook(createBookDto);
            console.log(newBook)
            return response.status(HttpStatus.CREATED).json({
                newBook
            })
        } catch(error){
            throw new InternalServerErrorException(error);
        };
        
    }

    @Delete('/:id')
    async deleteBookById(@Res() response, @Param('id') id) {
        const deleteBook = await this.bookService.removeBook(id);
        return response.status(HttpStatus.OK).json({
            deleteBook
        })
    }
}