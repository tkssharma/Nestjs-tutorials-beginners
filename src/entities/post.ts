import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('Post')
export default class PostEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    subtitle: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt;

    @UpdateDateColumn()
    updatedAt;

}
