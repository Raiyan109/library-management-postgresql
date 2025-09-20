import { IBook } from "./book.interface";
export declare const BookServices: {
    createBookService: (payload: IBook) => Promise<any>;
    findAllBooksService: () => Promise<any>;
    findBookByIdService: (bookId: string) => Promise<any>;
    updateBookService: (bookId: string, payload: Partial<IBook>) => Promise<any>;
    deleteBookService: (bookId: string) => Promise<any>;
};
//# sourceMappingURL=book.service.d.ts.map