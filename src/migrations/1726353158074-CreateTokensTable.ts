import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { TokenStatus, TokenType } from '../types/enums';

export class CreateTokensTable1726353158074 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tokens',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'value',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: Object.values(TokenStatus),
            isNullable: false,
          },
          {
            name: 'type',
            type: 'enum',
            enum: Object.values(TokenType),
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tokens');
  }
}
