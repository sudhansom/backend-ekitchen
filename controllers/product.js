import { HttpErrors } from "../http-errors/errors.js";
import Product from "../models/product.js";

export const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await Product.find();
        return res.status(200).json(allProducts);
    } catch(err) {
        return next(err);
    }
}

export const createProduct = async (req, res, next) => {
    try {
        const { name, category, quantity } = req.body;
        console.log(name, quantity);

        const existingProduct = await Product.findOne({name});
        console.log(existingProduct);
        if(existingProduct){
            const error = new HttpErrors("Product already exists..", 401);
            return next(error);
        }
        const newProduct = new Product({
            name,
            image: req.file.path,
            category,
            quantity: quantity,
            date: new Date(),
        });
        await newProduct.save();

        return res.status(200).json({message: "A new Product created...", product: newProduct})
    } catch(err) {
        return next(err);
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        console.log('quantity...', req.body.quantity)
        const oneProduct = await Product.findByIdAndUpdate(req.body._id, {quantity:Number(req.body.quantity)});
        return res.status(200).json(oneProduct);
    } catch(err) {
        return next(err);
    }
}