import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("products")
export class Product {

    @PrimaryGeneratedColumn('uuid', { name: 'product_id' })
    productId: string

    @Column({ nullable: false })
    name: string

    @Column({ unique: true })
    sku: string

    @Column({ name: 'current_stock', default: 0 })
    currentStock: number


    @Column('numeric', { precision: 3 })
    price: number


    @Column('numeric', { precision: 3, name: 'tax_percentage' })
    taxPercentage: number


    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

}