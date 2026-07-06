import { Request, Response } from "express";

 const getProducts = (req: Request, res: Response): void => {
  res.send("Products");
};
export default getProducts;