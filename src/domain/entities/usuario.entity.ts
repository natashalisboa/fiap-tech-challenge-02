import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { IUsuario } from "./models/usuario.interface";
import { Cargo } from "./cargo.entity";

@Entity({
    name: 'usuario'
})
export class Usuario implements IUsuario{
    @PrimaryGeneratedColumn('increment', {
        name:'userid'
    })
    userId: number;

    @Column({
        name: 'nome',
        type: 'varchar'
    })
    nome: string;
    
    @Column({
        name: 'email',
        type: 'varchar'
    })
    email: string;
    
    @Column({
        name: 'senha',
        type: 'varchar'
    })
    senha: string;
    
 
    @ManyToOne(() => Cargo)
    @JoinColumn({ name: 'cargo' })
    cargo: Cargo;
    
    @Column({
        name: 'dtcriacao',
        type: 'date'
    })
    dtCriacao: Date;
    
    @Column({
        name: 'dtatualizacao',
        type: 'date'
    })
    dtAtualizacao: Date;

}

