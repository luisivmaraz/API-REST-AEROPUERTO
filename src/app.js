import express from 'express'
import morgan from 'morgan'
import { config } from "dotenv";
config()
import routerBoletos from './routes/boletoRoutes.js'

const app=express()

//configuración
app.set('view engine','ejs')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use('/api/bolrtos',routerBoletos)

export default app
