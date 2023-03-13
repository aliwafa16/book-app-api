import { Body, Controller, Get, Param, Post, ForbiddenException, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private bookservice: BooksService) { }
    @Get()
    getAllBooks() {
        return this.bookservice.getAllBooks()
    }


    @Post()
    createBooks(@Body() payload : any) {
        return this.bookservice.createBooks(payload)
    }


    @Put()
    updateBooks(@Body() payload:any) {
        return this.bookservice.updateBooks(payload)
    }
}
