import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { SaleItem } from "./saleItem.entity";


@Entity("sales")
export class Sale {

    @PrimaryGeneratedColumn('uuid', { name: 'sale_id' })
    saleId: string

    @ManyToMany(() => SaleItem, { onDelete: "CASCADE", nullable: false })
    @JoinColumn({ name: 'sale_item_it' })
    saleItem: SaleItem


    @Column('numeric', { name: 'sale_price', precision: 3 })
    salePrice: number

    @Column('numeric', { nullable: true, precision: 3 })
    discount: number


    @Column('numeric', { precision: 3 })
    price: number


    @Column('numeric', { precision: 3, name: 'tax_percentage' })
    taxPercentage: number


    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

}