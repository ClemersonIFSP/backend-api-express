import userModel from "../../models/userModel.js";

const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const user = await userModel.findUnique(id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

export default getById;