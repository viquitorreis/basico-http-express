const pool = require('pg').Pool

const pool = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'student',
    password: 'banco1234',
    poort: '5432'
})

module.exports = pool;