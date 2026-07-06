import mongoose from "mongoose";
import { Product } from "../interface/productInterfaces";
const productSchema = new mongoose.Schema<Product>({
    name:{
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    reviews: [{ type: String }],
})
const Product = mongoose.model("Product", productSchema);
export default Product;