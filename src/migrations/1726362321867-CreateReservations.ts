import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateReservations1726362321867 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'reservations',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'status',
          type: 'enum',
          enum: ['Pending', 'Confirmed', 'In Process', 'Completed', 'Canceled', 'No Show', 'Rescheduled'],
          default: `'Pending'`,
        },
        {
          name: 'startTime',
          type: 'timestamp',
        },
        {
          name: 'endTime',
          type: 'timestamp',
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'CURRENT_TIMESTAMP',
          onUpdate: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'businessId',
          type: 'int',
          isUnique: false,
          isNullable: true,
        },
        {
          name: 'customerId',
          type: 'int',
          isUnique: false,
          isNullable: true,
        },
        {
          name: 'serviceId',
          type: 'int',
          isUnique: false,
          isNullable: true,
        }
      ],
    }));

    await queryRunner.createForeignKey('reservations', new TableForeignKey({
      columnNames: ['businessId'],
      referencedTableName: 'users',
      referencedColumnNames: ['id'],
      onDelete: 'SET NULL',
    }));

    await queryRunner.createForeignKey('reservations', new TableForeignKey({
      columnNames: ['customerId'],
      referencedTableName: 'users',
      referencedColumnNames: ['id'],
      onDelete: 'SET NULL',
    }));

    await queryRunner.createForeignKey('reservations', new TableForeignKey({
      columnNames: ['serviceId'],
      referencedTableName: 'services',
      referencedColumnNames: ['id'],
      onDelete: 'SET NULL',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('reservations');
    const businessForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('businessId') !== -1);
    const customerForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('customerId') !== -1);
    const serviceForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('serviceId') !== -1);
    await queryRunner.dropForeignKey('reservations', businessForeignKey);
    await queryRunner.dropForeignKey('reservations', customerForeignKey);
    await queryRunner.dropForeignKey('reservations', serviceForeignKey);

    await queryRunner.dropTable('reservations');
  }
}
