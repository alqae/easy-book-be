import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { AttachmentGroup } from '../types/enums';

export class CreateAttachmentsTable1726353157154 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'attachments',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'filename',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'originalName',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'path',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'size',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'group',
            type: 'enum',
            enum: Object.values(AttachmentGroup),
            default: `'${AttachmentGroup.AVATARS}'`,
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('attachments');
  }
}