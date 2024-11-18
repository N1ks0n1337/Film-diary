// src/films/film.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Tag } from '../tags/tag.entity';
import { Playlist } from '../playlists/playlist.entity';
import { Selected } from '../selected/selected.entity';

@Entity('films')
export class Film {
  @PrimaryGeneratedColumn('uuid')
  id_film: string;

  @Column({ length: 255 })
  film_title: string;

  @Column({ type: 'int' })
  film_year: number;

  @Column({ length: 20 })
  film_time: string;

  @Column({ length: 10 })
  film_age: string;

  @Column({ type: 'text', nullable: true })
  film_description: string;

  @Column({ length: 255, nullable: true })
  film_image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Tag, tag => tag.films, { cascade: true })
  @JoinTable({
    name: 'film_tags',
    joinColumn: { name: 'film_id', referencedColumnName: 'id_film' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id_tag' },
  })
  tags: Tag[];

  @ManyToMany(() => Playlist, playlist => playlist.films)
  playlists: Playlist[];

  @OneToMany(() => Selected, selected => selected.film)
  selectedByUsers: Selected[];
}
