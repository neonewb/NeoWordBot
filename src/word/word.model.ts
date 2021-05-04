import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'words' })
export class Word {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ length: 18 })
  text!: string
}
