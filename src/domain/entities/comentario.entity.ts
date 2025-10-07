import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IPost } from "./models/post.interface";
import { Disciplina } from "./disciplina.entity";
import { Usuario } from "./usuario.entity";
import { IComentario } from "./models/comentario.interface";
import { Post } from "./post.entity";

@Entity({
    name: 'comentario'
})
export class Comentario implements IComentario{
    @PrimaryGeneratedColumn('increment', {
            name:'comentarioid'
        })
    comentarioId: number;

    @ManyToOne(() => Post)
    @JoinColumn({ name: 'postid' })
    post: Post;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'autorid' })
    autor: Usuario;

    @Column({
        name: 'conteudo',
        type: 'varchar'
    })
    conteudo: string;

    @Column({
        name: 'dtcriacao',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    })
    dtCriacao: Date;

    @Column({
        name: 'dtatualizacao',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    })
    dtAtualizacao: Date;
}

