const AppError = require('../utils/appError')

class UsersController {
    create(request, response) {
        const { name, email, password } = request.body;

        if(!name) {
            throw new AppError('Nome obrigatório!')
        }

        if(!email) {
            throw new AppError('Email obrigatório')
        }

        if(!password) {
            throw new AppError('Password obrigatório')
        }

        response.status(201).json({ name, email, password });
    }
}

module.exports = UsersController

/*
        METODOS DE UM CONTROLLER
    index - GET para listar vários registros
    show - GET para exibir um registro específico
    create - POST para criar um registro
    update - PUT para atualizar um registro
    delete - DELETE para deletar um registro
     */