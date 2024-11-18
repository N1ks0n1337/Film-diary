// src/selected/selected.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, Unique, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Film } from '../films/film.entity';

@Entity('selected')
@Unique(['user', 'film'])
export class Selected {
  @PrimaryGeneratedColumn('uuid')
  id_selected: string;

  @ManyToOne(() => User, user => user.selectedFilms, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Film, film => film.selectedByUsers, { onDelete: 'CASCADE' })
  film: Film;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  added_at: Date;
}
