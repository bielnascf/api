require('express-async-errors')

const database = require('./database/sqlite')
const AppError = require('./utils/appError')
const express = require('express');
const routes = require('./routes');
const server = express();
const PORT = 3333;

server.use(express.json());

server.use(routes);

database()

server.use(( error, request, response, next ) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({ 
            status: "error",
            message: error.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

server.listen(PORT, console.log(`Server is running at ${PORT} port.`));