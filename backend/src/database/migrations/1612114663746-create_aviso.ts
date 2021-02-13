import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAviso1612114663746 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    
    await queryRunner.createTable( new Table({
      name: 'warning',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },

        {
          name: 'warning',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment'
        },

        {
          name: 'name',
          type: 'varchar',
          isNullable: true,
          default: "'Anônimo'",
        },

        {
          name: 'contact',
          type: 'varchar',
          isNullable: true,

        },

        {
          name: 'description',
          type: 'varchar',

        },

        {
          name: 'vehicle',
          type: 'varchar',
          isNullable: true,

        },

        {
          name: 'arrival_time',
          type: 'varchar',
          isNullable: true,

        },

        {
          name: 'end_time',
          type: 'varchar',
          isNullable: true,

        },

        {
          name: 'outcome',
          type: 'varchar',
          isNullable: true,

        },

        {
          name: 'nature',
          type: 'varchar',
          isNullable: true,

        },

        {
          name: 'status',
          type: 'varchar',
          default: "'Pendente'"
        },

        {
          name: 'createdAt',
          type: 'timestamp',
          isNullable: true,
          default: 'CURRENT_TIMESTAMP'
        }

      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('warning');

  }

}
