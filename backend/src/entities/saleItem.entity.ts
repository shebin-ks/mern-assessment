import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";


@Entity("sale_items")
export class SaleItem {

    @PrimaryGeneratedColumn('uuid', { name: 'sale_item_id' })
    saleItemId: string



    @ManyToOne(() => Sale, (sale) => sale.saleItems, { onDelete: "CASCADE", nullable: false })
    @JoinColumn({ name: 'sale_id' })
    sale: Sale

    @ManyToOne(() => Product, { onDelete: "CASCADE", nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: Product


    @Column({ default: 1 })
    quantity: number

    @Column({ type: 'decimal', name: 'sale_item_price', })
    saleItemPrice: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

}