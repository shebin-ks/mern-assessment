import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";


@Entity("sale_items")
export class SaleItem {

    @PrimaryGeneratedColumn('uuid', { name: 'sale_item_id' })
    saleItemId: string

    @ManyToOne(() => Product, { onDelete: "CASCADE", nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: Product


    @Column({default: 1})
    quantity: number

    @Column('numeric', {name:'sale_item_price', precision: 3 })
    saleItemPrice: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

}