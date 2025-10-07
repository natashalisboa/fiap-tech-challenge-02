import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IPost } from "./models/post.interface";
import { Disciplina } from "./disciplina.entity";
import { Usuario } from "./usuario.entity";
import { Comentario } from "./comentario.entity";

@Entity({
    name: 'post'
})
export class Post implements IPost{
    @PrimaryGeneratedColumn('increment', {
            name:'postid'
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
    @JoinColumn({ name: 'disciplinaid' })
    disciplina: Disciplina;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'autorid' })
    autor: Usuario;

    @OneToMany(() => Comentario, comentario => comentario.post)
    comentarios: Comentario[];

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

