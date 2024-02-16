const remove = (req, res) => {
    const id = req.params.id
    res.json({msg: 'Esta é a rota DELETE /product/'+ id})
}

export default remove