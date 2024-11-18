// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Film } from './films/film.entity';
import { Tag } from './tags/tag.entity';
import { Playlist } from './playlists/playlist.entity';
import { Selected } from './selected/selected.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Замените на ваш хост
      port: 5432,        // Замените на ваш порт
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      entities: [User, Film, Tag, Playlist, Selected],
      synchronize: true, // Включите только для разработки
    }),
    // Импортируйте модули ваших сущностей
    TypeOrmModule.forFeature([User, Film, Tag, Playlist, Selected]),
    // Другие модули
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
