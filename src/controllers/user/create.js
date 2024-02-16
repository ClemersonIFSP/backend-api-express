const create = (req, res) => {
    const user = req.body
    res.json({msg: 'Esta é a rota POST /user/', user: user})
}

export default create
