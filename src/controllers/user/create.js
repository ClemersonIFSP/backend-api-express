import userModel from "../../models/userModel.js";

const create = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;
    const user = await userModel.create(name, email, avatar);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

export default create;
