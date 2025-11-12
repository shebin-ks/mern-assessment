import { DataSource } from "typeorm";
import dotenv from 'dotenv'
import { User } from "../entities/user.entity";
import { Product } from "../entities/product.entity";
import { Purchase } from "../entities/purchase.entity";


dotenv.config()


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    ssl: false,
    dropSchema:true,
    entities: [
        User,
        Product,
        Purchase
    ]
})