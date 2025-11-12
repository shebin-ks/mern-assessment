import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("products")
export class Product {

    @PrimaryGeneratedColumn('uuid', { name: 'product_id' })
    productId: string

    @Column({ nullable: false, name: 'product_name' })
    productName: string

    @Column({ unique: true })
    sku: string

    @Column({ name: 'current_stock', default: 0})
    currentStock: number


    @Column({ type: 'decimal', default: 100 })
    price: number


    @Column({ type: 'decimal', default: 100, name: 'tax_percentage' })
    taxPercentage: number


    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

}