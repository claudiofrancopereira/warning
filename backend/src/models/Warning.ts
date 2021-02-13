import { Entity, Column, PrimaryGeneratedColumn, Generated, CreateDateColumn, BeforeInsert } from 'typeorm';

@Entity('warning')
export default class Warning {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Generated('increment')
    warning: number;
    
    @Column()
    name: string;

    @Column()
    contact: string;

    @Column()
    description: string;
    
    @Column()
    vehicle: string;

    @Column()
    arrival_time: string;

    @Column()
    end_time: string;

    @Column()
    outcome: string;

    @Column()
    nature: string;

    @Column()
    status: string;
}