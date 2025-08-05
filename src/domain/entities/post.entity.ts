import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IPost } from "./models/post.interface";
import { Disciplina } from "./disciplina.entity";
import { Usuario } from "./usuario.entity";

@Entity({
    name: 'post'
})
export class Post implements IPost{
    @PrimaryGeneratedColumn('increment', {
            name:'postId'
        })
    postId: number;

    @Column({
        name: 'titulo',
        type: 'varchar'
    })
    titulo: string;

    @Column({
        name: 'conteudo',
        type: 'varchar'
    })
    conteudo: string;

    @ManyToOne(() => Disciplina)
    @JoinColumn({ name: 'disciplinaId' })
    disciplinaId: Disciplina;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'userId' })
    autorId: Usuario;

    @Column({
        name: 'dtCriacao',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    })
    dtCriacao: Date;

    @Column({
        name: 'dtAtualizacao',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    })
    dtAtualizacao: Date;
}

