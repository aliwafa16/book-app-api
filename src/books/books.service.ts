import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
    private books: any[] = []
    getAllBooks(): any[] {
        return this.books
    }

    createBooks(payload:any) {
        this.books.push({
            id: uuidv4(),
            judul :payload.judul,
            deskripsi : payload.deskripsi,
            tahun : payload.tahun
        })
    }
    updateBooks(payload: any) {
        let item = payload
        var items = this.books
        var foundIndex = items.findIndex(x => x.id == item.id);
        items[foundIndex] = item;
    }
}
