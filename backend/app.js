import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from './database/dbConnection.js';
import {errorMiddleware} from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({path:"./config/config.env"});

// app.use(cors({
//     origin:[process.env.FRONTEND_URL],
//     methods:["POST"],
//     credentials:true,
// }));
app.use(cors({
    origin: ["https://mern-project-ruddy-iota.vercel.app", "http://localhost:5173"], // Add all allowed frontend URLs
    methods: ["POST", "GET"],
    credentials: true, // Required for authentication & cookies
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/reservation", reservationRouter);

console.log(app._router.stack.map(r => r.route?.path));


dbConnection();

app.use(errorMiddleware)

export default app;
