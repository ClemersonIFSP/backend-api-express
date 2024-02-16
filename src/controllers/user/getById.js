const getById = (req, res) => {
    const id = req.params.id
    res.json({msg: 'Esta é a rota GET /user/'+ id})
}

export default getById