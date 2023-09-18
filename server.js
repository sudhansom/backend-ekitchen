import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import cors from 'cors';

import { dev } from "./config/index.js";
import connectDb from "./config/db.js";
import productRoute from "./routes/product.js";

const port = dev.app.port;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/uploads/images", express.static(path.join('uploads', 'images')));

app.use("/api/products", productRoute);

app.listen(port, async ()=>{
    console.log(chalk.blueBright(`server running at: http://localhost:${port}`));
    await connectDb();
})

app.use((req, res, next)=>{
    return res.status(404).json({
        success: false,
        message: "Not found 404",
    })
});

app.use((error, req, res, next) => {
    if(req.file){
        fs.unlink(req.file.path, (err) => {
            console.log(err);
        })
    }
    return res.status(500).json({
        success: false,
        message: `${error} mmmm`,
    })
});