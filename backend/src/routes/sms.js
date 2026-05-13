import express from 'express';
import { parseSMS } from '../utils/parser.js';
import { verifyZK } from '../services/zkService.js';
import { sendTransaction } from '../services/solanaService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    const parsed = parseSMS(message);

    const verified = await verifyZK(parsed);

    if (!verified) {
      return res.status(400).json({
        success: false,
        error: 'ZK verification failed'
      });
    }

    const tx = await sendTransaction(parsed);

    res.json({
      success: true,
      transaction: tx
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

export default router;
