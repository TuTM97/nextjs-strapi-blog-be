const path = require('path');

// strapi-api/config/database.js
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-3-224-164-189.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dcaqnop5cod330"),
        username: env("DATABASE_USERNAME", "nkxeibbjfddlat"),
        password: env("DATABASE_PASSWORD", "5082ab22b6269d36f09af30825f88815ee97f1310c9b1dfbc1c7d5aec201acb7"),
        schema: env("DATABASE_SCHEMA", "public"),
      },
      options: {},
    },
  },
});
