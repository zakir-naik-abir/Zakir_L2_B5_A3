import { Request, Response } from "express";
import Book from "./book.model";

// create book
const createBook = async (req: Request, res: Response) => {
  try {
    const query = req.body;
    const book = new Book(query);
    const data = await book.save();
    res.send({ success: true, message: "Book created Successfully", data });
  } catch (error) {
    res.send({
      success: false,
      message: "Error",
      error,
    });
  }
};

//  get all books
const getBooks = async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sortBy = "createAt",
      sort = "desc",
      limit = 10,
    } = req.query;
    const books = await Book.find(filter ? { genre: filter } : {})
      .sort({ [sortBy as string]: sort === "asc" ? 1 : -1 })
      .limit(Number(limit));

    res.send({
      success: true,
      message: "Book retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error",
      error,
    });
  }
};

// get book by id
const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const data = await Book.findById(bookId);

    res.send({
      success: true,
      message: "Book retrieved  successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error",
      error,
    });
  }
};

// update book
const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const data = await Book.findByIdAndUpdate(bookId, req.body, { new: true });

    res.send({
      success: true,
      message: "Book updated successful",
      data,
    });
  } catch (error) {
    res.send({
      success: true,
      message: "Error",
      error,
    });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const data = await Book.findByIdAndDelete(bookId);

    res.send({
      success: true,
      message: "Book deleted successful",
      data: null,
    });
  } catch (error) {
    res.send({
      success: true,
      message: "Error",
      error,
    });
  }
};

export const bookController = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
