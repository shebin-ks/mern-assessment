import express from 'express'
import cors from 'cors'
import productRouter from './routes/product.routes'
import { errorHandler } from './middlewares/errorHandler'
import saleRouter from './routes/sale.routes'
import purchaseRouter from './routes/purchase.routes'
import dashboardRouter from './routes/dashboard.routes'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))



app.use("/api/v1/product", productRouter)
app.use("/api/v1/purchase", purchaseRouter)
app.use("/api/v1/sale", saleRouter)
app.use("/api/v1/dashboard", dashboardRouter)


app.use(errorHandler)

export default app