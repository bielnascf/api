const { Router } = require("express");

const usersRouter = Router();

// function myMiddleware(request, response, next) {

//     if(!request.body.isAdmin) {
//         return response.status(401).json({ message: "user unauthorized" });
//     }

//     next()
// }

const UsersController = require('../controllers/usersController')
const userController = new UsersController()

usersRouter.post('/', userController.create) // ---> Aqui entraria o middleware de forma específica.
// para usar um middleware geral (Para todas as rotas) ---> userRouter.use(myMiddleware)

module.exports = usersRouter;