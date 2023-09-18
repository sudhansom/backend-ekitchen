import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            minlength: 3,
            maxlength: 30,
            trim: true,
        },
        image: {
            type: String,
            required: [true, "Product image is required"],
            minlength: 3,
            maxlength: 164,
            trim: true,
        },
        quantity: {
            type: Number,
            required: [true, "Product quantity is required"],
        },
        category: {
            type: String,
            required: [true, "Product category is required"],
            minlength: 3,
            maxlength: 64,
            trim: true,
        },
        date: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }
)

const Product = model("product", productSchema);
export default Product;
