const { env } = process;

module.exports = {
    development: {
        username: env.DATABASE_USERNAME,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE_NAME,
        host: env.DATABASE_HOST,
        port: env.DATABASE_PORT,
        dialect: 'postgres',
    },
    production: {
        username: env.DATABASE_USERNAME,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE_NAME,
        host: env.DATABASE_HOST,
        port: env.DATABASE_PORT,
        dialect: 'postgres',
    },
};
