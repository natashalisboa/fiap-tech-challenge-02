import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IPost } from "./models/post.interface";
import { Disciplina } from "./disciplina.entity";
import { Usuario } from "./usuario.entity";

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
    disciplinaId: Disciplina;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'autorid' })
    autorId: Usuario;

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

