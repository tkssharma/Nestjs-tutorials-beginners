import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('User')
export default class UserEntity{

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
