const { Router } = require("express");

const routes = Router()

routes.use('/user', userRoute)
routes.use('/user', bookRoute)

export default routes