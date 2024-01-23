import express from 'express'
const app=express()

port=process.env.PORT||8000


import formRoutes from './routes/form.routes.js'
app.use("api/v1/users",formRoutes)


app.listen(port,()=>{
    console.log(`app is listning on port:${port}`)
})