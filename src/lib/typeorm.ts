import { DataSource } from "typeorm";

import { env } from "../env";
import { app } from "../app";

export const appDataSource = new DataSource({
    type: "postgres",
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    entities: ['src/domain/entities/*.ts'],
    logging: env.NODE_ENV === 'development',
});

appDataSource.initialize().then(() => {
    console.log("Database connection established successfully")})
    .catch((error) => {
        console.error("Error during Data Source initialization:", error)
    });
