// src/users/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Playlist } from '../playlists/playlist.entity';
import { Selected } from '../selected/selected.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'bigint', unique: true })
  vk_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Playlist, playlist => playlist.creator)
  playlists: Playlist[];

  @OneToMany(() => Selected, selected => selected.user)
  selectedFilms: Selected[];
}
