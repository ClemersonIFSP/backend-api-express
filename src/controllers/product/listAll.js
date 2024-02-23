import productModel from "../../models/productModel.js";

const listAll = async (req, res) => {
  try {
    const product = await productModel.findMany();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

export default listAll;
