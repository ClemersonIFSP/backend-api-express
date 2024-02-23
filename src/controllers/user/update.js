import userModel from "../../models/userModel.js";

const update = async (req, res) => {
  try {
    const { id, name, email, avatar } = req.body;
    const user = await userModel.update(id, name, email, avatar);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

export default update;
