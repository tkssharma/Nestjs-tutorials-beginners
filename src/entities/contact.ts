import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export default class ContactEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    @Column()
    name: string;

    @PrimaryColumn()
    @Column({
        unique: true,
        nullable: false,
    })
    email: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    createdAt;

    @UpdateDateColumn()
    updatedAt;

}
