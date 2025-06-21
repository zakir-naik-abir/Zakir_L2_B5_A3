import { Router } from "express";
import { borrowController } from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post('/borrow', borrowController.borrowBook )
borrowRoute.get('/borrow', borrowController.getBorrowSummary )

export default borrowRoute;