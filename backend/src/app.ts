import express from 'express'
import cors from 'cors'
import productRouter from './routes/product.routes'
import { errorHandler } from './middlewares/errorHandler'
import saleRouter from './routes/sale.routes'

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cors({

}))



app.use("/api/v1/product",productRouter)
app.use("/api/v1/sale",saleRouter)


app.use(errorHandler)

export default app