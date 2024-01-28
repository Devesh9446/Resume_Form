import express from 'express'
const app=express()
import cors from 'cors'

app.use(cors({origin:process.env.CORS}))

import formRoutes from './routes/form.routes.js'
app.use("/api/v1/users",formRoutes)

export {app}; 