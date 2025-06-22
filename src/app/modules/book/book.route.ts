import { Router } from "express";
import { bookController } from "./book.controller";

const bookRoute = Router();

bookRoute.post("/books", bookController.createBook);
bookRoute.get("/books", bookController.getBooks);
bookRoute.get("/books/:bookId", bookController.getBookById);
bookRoute.put("/books/:bookId", bookController.updateBook);
bookRoute.delete("/books/:bookId", bookController.deleteBook);

export default bookRoute;
