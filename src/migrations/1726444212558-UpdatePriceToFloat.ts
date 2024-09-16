import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePriceToFloat1726444212558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "services"
      ALTER COLUMN "price" TYPE FLOAT;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "services"
      ALTER COLUMN "price" TYPE INTEGER;
    `);
  }
}