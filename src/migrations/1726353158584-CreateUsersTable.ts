import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

import { UserRole, UserStatus } from '../types/enums';

export class CreateUsersTable1726353158584 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'firstName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'lastName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
            // isSelect: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'verify_email_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'role',
            type: 'enum',
            enum: Object.values(UserRole),
            default: `'${UserRole.CUSTOMER}'`,
          },
          {
            name: 'status',
            type: 'enum',
            enum: Object.values(UserStatus),
            default: `'${UserStatus.INACTIVE}'`,
          },
        ],
      }),
      true
    );

    await queryRunner.createIndex(
      'users',
      new TableIndex({
        name: 'IDX_USERS_FIRST_NAME',
        columnNames: ['firstName'],
        isFulltext: true,
      })
    );

    await queryRunner.createIndex(
      'users',
      new TableIndex({
        name: 'IDX_USERS_LAST_NAME',
        columnNames: ['lastName'],
        isFulltext: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('users', 'IDX_USERS_FIRST_NAME');
    await queryRunner.dropIndex('users', 'IDX_USERS_LAST_NAME');

    await queryRunner.dropTable('users');
  }
}
