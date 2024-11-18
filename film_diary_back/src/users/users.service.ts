// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Создание или получение пользователя по vk_id
  async findOrCreate(vk_id: number): Promise<User> {
    let user = await this.usersRepository.findOne({ where: { vk_id } });
    if (!user) {
      user = this.usersRepository.create({ vk_id });
      user = await this.usersRepository.save(user);
    }
    return user;
  }

  // Получение пользователя по id
  async findById(id: string): Promise<User> {
    return this.usersRepository.findOne(id, { relations: ['playlists', 'selectedFilms'] });
  }

  // Другие методы по необходимости
}
