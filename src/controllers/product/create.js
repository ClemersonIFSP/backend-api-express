import productModel from "../../models/productModel.js";

const create = async (req, res) => {
  try {
    const { name, price, quantity, foto } = req.body;
    const product = await productModel.create(name, price, quantity, foto);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

export default create;
