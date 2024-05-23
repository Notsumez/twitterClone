import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    }catch (error) {
        console.log(`Erro de conexão com o mongoDB: ${error.message}`);
        process.exit(1)
    }
};

export default connectMongoDB;