require('dotenv').config
module.exports=
{
  development: {
    database: "goodtimes_development",
    dialect: "postgres"
  },
  test: {
    database: "goodtimes_test",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    database: "goodtimes_production",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
