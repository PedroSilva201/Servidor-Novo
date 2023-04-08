import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity ({name: "spents"})
export class Spent{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false, length:50})
    description: string;

    @Column({nullable:false, type:"decimal"})
    value: number;
    @ManyToOne((type)=>User, {onDelete: "CASCADE"})//Constructor, ArrayFunction (=>), CASCADE se apagar, tudo sera escluido
    @JoinColumn({
        name: "iduser",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_spent"
    })
    user: User;
}