module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfbljb82i3mjdumup6ag-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_43wo'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'KaEnBlfol2m4j6BF2kF6uKDKbHnWwGST'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
