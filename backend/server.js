import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import tcRoutes from './routes/tc.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/tc/', tcRoutes);

app.listen(PORT, ()=>{
	connectDB();
	console.log("server started at http://localhost:5000");
})