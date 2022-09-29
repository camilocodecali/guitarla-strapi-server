module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccprjoqen0hr84ner7ig-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_mt8d'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'NP4AG6wOTS4x1QCU0gLBu1isWRo5HVMq'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
