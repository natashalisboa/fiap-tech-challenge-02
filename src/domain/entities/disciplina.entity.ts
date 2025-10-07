import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IDisciplina } from "./models/disciplina.interface";

@Entity({
    name: 'disciplina'
})
export class Disciplina implements IDisciplina {
    @PrimaryGeneratedColumn('increment', {
        name: 'disciplinaid'
    })
    disciplinaId: number;

    @Column({
        name: 'nome',
        type: 'varchar'
    })
    nome: string;

}