import {
  Entity,
  Column,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  JoinColumn
} from 'typeorm';

import { UserRole, UserStatus } from '../types/enums';
import { Reservation } from './Reservation';
import { Attachment } from './Attachment';
import { Service } from './Service';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Attachment, { lazy: true })
  @JoinColumn({ name: 'avatar_id' })
  avatar?: Attachment;

  @Index({ fulltext: true })
  @Column({ nullable: true })
  firstName?: string;

  @Index({ fulltext: true })
  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ name: 'verify_email_at', type: 'timestamp', nullable: true })
  verifyEmailAt?: Date;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
  role: UserRole;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.INACTIVE })
  status: UserStatus;

  @OneToMany(() => Service, (service) => service.user, { lazy: true })
  services: Service[];

  // FYI: The User is business for customer so we need both reservations
  @OneToMany(() => Reservation, (reservation) => reservation.business, { lazy: true })
  businessReservations: Reservation[];

  @OneToMany(() => Reservation, (reservation) => reservation.customer, { lazy: true })
  customerReservations: Reservation[];

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

// Payload for JWT
export interface UserPayload {
  id: User['id'];
  email: User['email'];
}
