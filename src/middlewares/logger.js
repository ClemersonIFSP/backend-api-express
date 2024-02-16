const logger = (req, res, next) => {
    console.log('Olá! passei pelo logger')
    next()
}

export default logger