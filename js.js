const {Client: PgClient} = require('pg');  // PostgreSQL
const mysql = require('mysql2/promise');  // MySQL
const {ConnectionPool: SqlServerConnectionPool} = require('mssql');  // SQL Server
const oracledb = require('oracledb');  // Oracle
const {MongoClient} = require('mongodb');  // MongoDB

async function connectToPostgreSQL() {
    const client = new PgClient({
        host: 'localhost',
        port: 5432,
        user: 'testuser',
        password: 'testpass',
        database: 'testdb'
    });

    try {
        await client.connect();
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error(`Could not connect to PostgreSQL: ${error.message}`);
    } finally {
        await client.end();
    }
}

async function connectToMySQL() {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'testuser',
            password: 'testpass',
            database: 'testdb'
        });
        console.log('Connected to MySQL');
    } catch (error) {
        console.error(`Could not connect to MySQL: ${error.message}`);
    } finally {
        if (connection) await connection.end();
    }
}

async function connectToSQLServer() {
    const pool = new SqlServerConnectionPool({
        server: 'localhost',
        database: 'testdb',
        user: 'testuser',
        password: 'testpass',
        options: {
            encrypt: true  // for Azure
        }
    });

    try {
        await pool.connect();
        console.log('Connected to SQL Server');
    } catch (error) {
        console.error(`Could not connect to SQL Server: ${error.message}`);
    } finally {
        await pool.close();
    }
}

async function connectToOracle() {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: 'testuser',
            password: 'testpass',
            connectString: 'localhost:1521/orcl'
        });
        console.log('Connected to Oracle');
    } catch (error) {
        console.error(`Could not connect to Oracle: ${error.message}`);
    } finally {
        if (connection) await connection.close();
    }
}

async function connectToMongoDB() {
    const client = new MongoClient('mongodb://testuser:testpass@localhost:27017/testdb');

    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(`Could not connect to MongoDB: ${error.message}`);
    } finally {
        await client.close();
    }
}

// Call the functions to attempt to connect to each database
connectToPostgreSQL();
connectToMySQL();
connectToSQLServer();
connectToOracle();
connectToMongoDB();
