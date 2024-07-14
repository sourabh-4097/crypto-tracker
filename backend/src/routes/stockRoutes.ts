import express from 'express';
import { getStockData, getLatestStockData } from '../controllers/stockController';

const router = express.Router();

router.get('/:symbol', getStockData);
router.get('/latest/:symbol', getLatestStockData);

export default router;
