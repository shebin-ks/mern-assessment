import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    SUPER_ADMIN = 'super_admin',
    CASHIER = 'cachier'
}


@Entity("users")
export class User {

    @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
    userId: string

    @Column({ nullable: false })
    name: string

    @Column({ unique: true })
    email: string

    @Column({ nullable: false, })
    password: string

    
    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.CASHIER
    })
    role: UserRole



    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

}