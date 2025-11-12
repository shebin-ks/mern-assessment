import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";



@Entity("purchases")
export class Purchase {

    @PrimaryGeneratedColumn('uuid', { name: 'purchase_id' })
    purchaseId: string


    @ManyToOne(() => Product, { onDelete: "CASCADE", nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: Product

    @Column({ default: 0 })
    quantity: number


    @Column('numeric', {name:'purchase_price', precision: 3 })
    purchasePrice: number


    @CreateDateColumn({
        type: 'date',
        name: 'purchase_date'
    })
    purchaseDate: Date


    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

}