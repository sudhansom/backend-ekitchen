import mongoose from "mongoose";
import chalk from "chalk";

import { dev } from "./index.js";

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://mtU1p265AJ28Kjoc:mtU1p265AJ28Kjoc@cluster0.3wccq.mongodb.net/backend-ekitchen');
        console.log(chalk.whiteBright("Connect to mongoDB..."));
    } catch(error) {
        console.log(chalk.redBright("Error Connecting mongoDb...", error.message))
    }
}

export default connectDb;