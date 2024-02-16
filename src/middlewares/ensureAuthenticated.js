const { verify } = require('jsonwebtoken')
const AppError = require('../utils/appError')
const authConfig = require('../configs/auth')

function ensureAuthenticated(request, response, next) {
    const authHeaders = request.headers.authorization
    if(!authHeaders) {
        throw new AppError("JWT Token não informado", 401)
    }

    const [, token] = authHeaders.split(" ")

    try {
        const {sub: user_id} = verify(token, authConfig.jwt.secret)

        request.user = {
            id: Number(user_id),
        }

        return next();
    } catch {
        throw new AppError("JWT Token inválido", 401) 
    }
}

module.exports = ensureAuthenticated