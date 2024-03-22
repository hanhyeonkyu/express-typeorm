import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  name: string;
}
