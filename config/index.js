import dotenv from "dotenv";

dotenv.config();

export const dev = {
    app: {
        port: process.env.PORT || 5003,
    },
    db: {
        mongoUrl: process.env.MONGODB_URL,
    }
}