import { Router } from "express";
import {  bookController } from "./book.controller";

const bookRoute = Router()

bookRoute.post('/book', bookController.createBook);
bookRoute.get('/books', bookController.getBooks);
bookRoute.get('/book/:bookId', bookController.getBookById);
bookRoute.put('/book/:bookId', bookController.updateBook);
bookRoute.delete('/book/:bookId', bookController.deleteBook);


export default bookRoute;