import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

import { UserRole, UserStatus } from '../types/enums';

@Entity('users')
export class User {
    @ObjectIdColumn()
    id: ObjectId;
  
    @Column({ nullable: true })
    firstName?: string;
  
    @Column({ nullable: true })
    lastName?: string;
  
    @Column({ nullable: true })
    city?: string;
  
    @Column({ nullable: true })
    country?: string;
  
    @Column({ nullable: true })
    phoneNumber?: string;
  
    @Column({ nullable: false })
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
  
    // @ManyToOne(() => User, user => user.businessUsers, { nullable: true })
    // business?: User;
  
    // @OneToMany(() => User, user => user.business, { cascade: true, eager: true })
    // businessUsers: User[];
  
    // @OneToMany(() => Service, service => service.user, { cascade: true, eager: true, orphanedRowAction: 'delete' })
    // services: Service[];
}

// Payload for JWT
export interface UserPayload {
  id: string
  email: string
}
