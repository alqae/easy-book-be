import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate
} from 'typeorm';

import { ReservationStatus } from '../types/enums';
import { User } from './User';
import { Service } from './Service';

@Entity('reservations')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ReservationStatus,
    default: ReservationStatus.PENDING
  })
  status: ReservationStatus;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @OneToOne(() => User, { lazy: true, createForeignKeyConstraints: false })
  @JoinColumn({ name: 'businessId' })
  business: User;

  @OneToOne(() => User, { lazy: true, createForeignKeyConstraints: false })
  @JoinColumn({ name: 'customerId' })
  customer: User;

  @OneToOne(() => Service, { lazy: true, createForeignKeyConstraints: false })
  @JoinColumn({ name: 'serviceId' })
  service: Service;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @BeforeInsert()
  updateCreatedAt() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  updateUpdatedAt() {
    this.updatedAt = new Date();
  }
}