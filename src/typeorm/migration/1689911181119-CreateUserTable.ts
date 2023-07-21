import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTable1689911181119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "User",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "username",
                        type: "varchar(200)"
                    },
                    {
                        name: "password",
                        type: "varchar(200)"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
