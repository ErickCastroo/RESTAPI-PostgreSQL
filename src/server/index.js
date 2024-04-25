import express from 'express'
import {puerto} from './config.js'
import {router} from '../routes/user.routes.js'
import morgan from 'morgan'


const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use(router)

app.listen(puerto, () => {
    console.log(`el servidor esta levantado en: http://localhost:${puerto}`)
    } 
)