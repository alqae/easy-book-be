import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTimestamps1726354582975 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'createdAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
    }));

    await queryRunner.addColumn('users', new TableColumn({
      name: 'updatedAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    }));

    await queryRunner.addColumn('tokens', new TableColumn({
      name: 'createdAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
    }));

    await queryRunner.addColumn('tokens', new TableColumn({
      name: 'updatedAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    }));

    await queryRunner.addColumn('services', new TableColumn({
      name: 'createdAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
    }));

    await queryRunner.addColumn('services', new TableColumn({
      name: 'updatedAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'createdAt');
    await queryRunner.dropColumn('user', 'updatedAt');

    await queryRunner.dropColumn('tokens', 'createdAt');
    await queryRunner.dropColumn('tokens', 'updatedAt');

    await queryRunner.dropColumn('services', 'createdAt');
    await queryRunner.dropColumn('services', 'updatedAt');
  }
}