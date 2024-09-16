import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

import { User } from './User';
import { Reservation } from './Reservation';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 100 })
  duration: string;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(() => User, (user) => user.services, { lazy: true })
  user: User;

  @OneToMany(() => Reservation, (reservation) => reservation.service)
  reservations: Reservation[];
}