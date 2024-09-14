import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

import { AttachmentGroup } from '../types/enums';

@Entity('attachments')
export class Attachment {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ type: 'varchar', length: 255 })
  filename: string;

  @Column({ type: 'varchar', length: 255 })
  originalName: string;

  @Column({ type: 'varchar', length: 255 })
  path: string;

  @Column({ type: 'bigint', nullable: true })
  size?: number;

  @Column({
    type: 'enum',
    enum: AttachmentGroup,
    default: AttachmentGroup.AVATARS
  })
  group: AttachmentGroup;
}