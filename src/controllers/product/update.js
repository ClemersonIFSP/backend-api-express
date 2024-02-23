import productModel from "../../models/productModel.js";

const update = async (req, res) => {
  try {
    const { id, name, price, quantity, foto } = req.body;
    const product = await productModel.update(id, name, price, quantity, foto);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

export default update;
