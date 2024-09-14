import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateServicesTable1726353157605 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'services',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '500',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'duration',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'userId',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
      true
    );

    // await queryRunner.createForeignKey(
    //   'services',
    //   new TableForeignKey({
    //     columnNames: ['userId'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'users',
    //     onDelete: 'SET NULL',
    //   })
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('services');
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('userId') !== -1);
    await queryRunner.dropForeignKey('services', foreignKey);

    await queryRunner.dropTable('services');
  }
}
