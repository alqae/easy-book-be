import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { TokenStatus, TokenType } from '../types/enums';

@Entity('tokens')
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column({ type: 'enum', enum: TokenStatus })
  status: TokenStatus;

  @Column({ type: 'enum', enum: TokenType })
  type: TokenType;
}
