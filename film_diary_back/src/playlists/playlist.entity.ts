// src/playlists/playlist.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Film } from '../films/film.entity';

@Entity('playlists')
export class Playlist {
  @PrimaryGeneratedColumn('uuid')
  id_playlist: string;

  @Column({ length: 255 })
  playlist_name: string;

  @ManyToOne(() => User, user => user.playlists, { nullable: false, onDelete: 'SET NULL' })
  creator: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  playlist_create_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Film, film => film.playlists, { cascade: true })
  @JoinTable({
    name: 'playlist_films',
    joinColumn: { name: 'playlist_id', referencedColumnName: 'id_playlist' },
    inverseJoinColumn: { name: 'film_id', referencedColumnName: 'id_film' },
  })
  films: Film[];
}
