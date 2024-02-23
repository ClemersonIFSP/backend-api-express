import userModel from '../../models/userModel.js'

const listAll = async (req, res) => {
  try {
    const user = await userModel.findMany();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

export default listAll;