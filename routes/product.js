import { Router } from "express";

import { getAllProducts, createProduct , updateProduct} from "../controllers/product.js";
import { productValidator } from "../validations/product.js";
import { runValidation } from "../validations/index.js";
import imageUpload from "../middlewares/image-upload.js";

const productRoute = Router();

productRoute.get("/", getAllProducts);
productRoute.post("/", imageUpload.single('image'), createProduct);
productRoute.put("/:id", updateProduct);



export default productRoute;