export declare const BorrowServices: {
    borrowService: (payload: any) => Promise<{
        bookId: string;
        memberId: string;
        borrowId: string;
        borrowDate: Date;
        returnDate: Date | null;
    }>;
};
//# sourceMappingURL=borrow.service.d.ts.map