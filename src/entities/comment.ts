import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('Comment')
export default class CommentEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt;

    @UpdateDateColumn()
    updatedAt;

}
