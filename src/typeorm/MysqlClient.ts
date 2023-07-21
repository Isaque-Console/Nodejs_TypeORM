import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import "dotenv/config"

export const mySqlClient = async (): Promise<DataSource> => {
    const AppDataSource = new DataSource({
        type: "mysql",
        host: process.env.MYSQL_HOST,
        port: +process.env.MYSQL_PORT,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: "test",
        synchronize: true,
        logging: true,
        entities: [User],
        migrations: ["src/typeorm/migration/*.ts"],
        subscribers: [],
    });

    return AppDataSource.initialize();
}
