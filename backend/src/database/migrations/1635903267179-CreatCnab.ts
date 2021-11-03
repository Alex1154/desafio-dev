import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatCnab1635903267179 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Cnab_table",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "tipo",
            type: "varchar",
          },
          {
            name: "data",
            type: "varchar",
          },
          {
            name: "hora",
            type: "varchar",
          },
          {
            name: "valor",
            type: "float",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "cartao",
            type: "varchar",
          },
          {
            name: "donoDaLoja",
            type: "varchar",
          },
          {
            name: "nomeDaLoja",
            type: "varchar",
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Cnab_table")
  }
}
