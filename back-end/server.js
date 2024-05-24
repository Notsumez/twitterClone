import express from "express";
import authRoutes from './routes/auth.routes.js';
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);   


app.listen(PORT, () => {
    console.log(`Server está funcionando na porta ${PORT}`);
    connectMongoDB();
});