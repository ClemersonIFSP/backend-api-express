import productModel from "../../models/productModel.js";

const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const product = await productModel.findUnique(id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

export default getById;
