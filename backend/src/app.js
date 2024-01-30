import express from 'express'
const app=express()
import cors from 'cors'

app.use(cors({origin:process.env.CORS}))

import resumeRoutes from './routes/resume.routes.js'
import userRoutes from './routes/user.routes.js'
app.use("/api/v1/users",resumeRoutes)
app.use("/api/v1/users",userRoutes)

export {app}; 