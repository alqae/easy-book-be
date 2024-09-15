import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class AddAvatarToUsers1726372537668 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'avatar_id',
      type: 'int',
      isNullable: true,
    }));

    await queryRunner.createForeignKey('users', new TableForeignKey({
      columnNames: ['avatar_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'attachments',
      onDelete: 'SET NULL',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Eliminar la foreign key
    const table = await queryRunner.getTable('users');
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('avatar_id') !== -1);
    await queryRunner.dropForeignKey('users', foreignKey);

    // Eliminar la columna avatar_id
    await queryRunner.dropColumn('users', 'avatar_id');
  }
}
