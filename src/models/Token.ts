import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

import { TokenStatus, TokenType } from '../types/enums';

@Entity('tokens')
export class Token {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  value: string;

  @Column({ type: 'enum', enum: TokenStatus })
  status: TokenStatus;

  @Column({ type: 'enum', enum: TokenType })
  type: TokenType;
}
