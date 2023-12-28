import express from "express";
import { Payment, TRXStatus } from "../controller/payment.js";

export const router = express.Router();

router.post("/api/v1/payment", Payment);
router.get("/api/v1/payment/status", TRXStatus);
