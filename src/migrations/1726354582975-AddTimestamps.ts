import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTimestamps1726354582975 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', new TableColumn({
      name: 'createdAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
    }));

    await queryRunner.addColumn('user', new TableColumn({
      name: 'updatedAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    }));

    await queryRunner.addColumn('service', new TableColumn({
      name: 'createdAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
    }));

    await queryRunner.addColumn('service', new TableColumn({
      name: 'updatedAt',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'createdAt');
    await queryRunner.dropColumn('user', 'updatedAt');

    await queryRunner.dropColumn('service', 'createdAt');
    await queryRunner.dropColumn('service', 'updatedAt');
  }
}