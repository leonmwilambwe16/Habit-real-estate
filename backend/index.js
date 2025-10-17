import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"

import { clerkMiddleware } from "./Middleware/clerk.middleware.js";

dotenv.config()
connectDB()
const app = express()

app.use(cors({
  origin: ['http://localhost:5175'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));
app.use(express.json()) 



app.use('/api/me' ,clerkMiddleware,(req,res)=>{
   res.json({ userId: req.userId, message: 'Authenticated via Clerk!' });
})


const PORT = process.env.PORT ||8050
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT} `)
})
