import { Request, Response } from "express";
import Book from "../book/book.model";
import Borrow from "./borrow.model";

const borrowBook = async(req: Request, res: Response)=>{
  try {
    const { book: bookId, quantity } = req.body;
    const book = await Book.findById(bookId);

    if(!book || book.copies < quantity){
      return res.status(400).json({
        success: false,
        message: 'Unavailable copies'
      });
    };

    const borrow = await Borrow.create(req.body);
    
    res.send({ success: true, message: "Book borrowed Successfully", borrow });

  } catch (error) {
    res.send({
      success: false,
      message: "Error",
      error,
    });
  }
};

const getBorrowSummary = async(req: Request, res: Response)=>{
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: '$book',
          totalQuantity: { $sum: '$quantity'}
        }
      },
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: '_id',
          as: 'book'
        }
      },
      {
        $unwind: '$book'
      },
      {
        $project: {
          _id: 0,
          book: { title: '$book.title', isbn: '$book.isbn'},
          totalQuantity: 1,
        }
      }
    ]);

    res.send({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });

  } catch (error) {
    res.send({
      success: true,
      message: "Error",
      error,
    });
  }
}


export const borrowController = { borrowBook, getBorrowSummary };