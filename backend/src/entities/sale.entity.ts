import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SaleItem } from "./saleItem.entity";


@Entity("sales")
export class Sale {

    @PrimaryGeneratedColumn('uuid', { name: 'sale_id' })
    saleId: string


    @Column({ name: 'customer_number', nullable: true })
    customerNumber: number


    @OneToMany(() => SaleItem,(saleItem)=>saleItem.sale)
    saleItems: SaleItem[]


    @Column({ type: 'decimal', name: 'sale_price', default: 0 })
    salePrice: number

    @Column({ type: 'decimal', nullable: true, default: 0 })
    discount: number


    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

}