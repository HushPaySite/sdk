import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import smsRoutes from './routes/sms.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/sms', smsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`HushPay backend running on port ${PORT}`);
});
