import dotenv from 'dotenv'
import {app} from "./app.js"

dotenv.config({
    path:'./.env'
}) 
app.listen(process.env.PORT||8000,()=>{
    console.log(`app is listning on PORT:${process.env.PORT}`,)
})