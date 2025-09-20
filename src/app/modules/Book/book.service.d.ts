import { IBook } from "./book.interface";
export declare const BookServices: {
    createBookService: (payload: IBook) => Promise<{
        bookId: string;
        title: string;
        genre: string;
        publishedYear: number;
        totalCopies: number;
        availableCopies: number;
    }>;
    findAllBooksService: () => Promise<{
        bookId: string;
        title: string;
        genre: string;
        publishedYear: number;
        totalCopies: number;
        availableCopies: number;
    }[]>;
    findBookByIdService: (bookId: string) => Promise<{
        bookId: string;
        title: string;
        genre: string;
        publishedYear: number;
        totalCopies: number;
        availableCopies: number;
    } | null>;
    updateBookService: (bookId: string, payload: Partial<IBook>) => Promise<{
        bookId: string;
        title: string;
        genre: string;
        publishedYear: number;
        totalCopies: number;
        availableCopies: number;
    }>;
    deleteBookService: (bookId: string) => Promise<{
        bookId: string;
        title: string;
        genre: string;
        publishedYear: number;
        totalCopies: number;
        availableCopies: number;
    }>;
};
//# sourceMappingURL=book.service.d.ts.map