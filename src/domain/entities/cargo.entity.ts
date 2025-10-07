import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ICargo } from "./models/cargo.interface";

@Entity({
    name: 'cargo'
})
export class Cargo implements ICargo {
    @PrimaryGeneratedColumn('increment', {
        name: 'cargoid'
    })
    cargoId: number;

    @Column({
        name: 'tipo',
        type: 'varchar'
    })
    tipo: string;

}