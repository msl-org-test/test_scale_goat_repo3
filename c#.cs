using System;
using Npgsql;  // For PostgreSQL
using MySql.Data.MySqlClient;  // For MySQL
using System.Data.SqlClient;  // For SQL Server
using Oracle.ManagedDataAccess.Client;  // For Oracle
using MongoDB.Driver;  // For MongoDB

class Program
{
    static void Main()
    {
        ConnectToPostgreSQL();
        ConnectToMySQL();
        ConnectToSQLServer();
        ConnectToOracle();
        ConnectToMongoDB();
    }

    static void ConnectToPostgreSQL()
    {
        string connString = "Host=localhost;Port=5432;Username=testuser;Password=testpass;Database=testdb;";
        using (var conn = new NpgsqlConnection(connString))
        {
            try
            {
                conn.Open();
                Console.WriteLine("Connected to PostgreSQL");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Could not connect to PostgreSQL: {ex.Message}");
            }
        }
    }

    static void ConnectToMySQL()
    {
        string connString = "Server=localhost;Port=3306;Database=testdb;User ID=testuser;Password=testpass;";
        using (var conn = new MySqlConnection(connString))
        {
            try
            {
                conn.Open();
                Console.WriteLine("Connected to MySQL");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Could not connect to MySQL: {ex.Message}");
            }
        }
    }

    static void ConnectToSQLServer()
    {
        string connString = "Server=localhost;Database=testdb;User Id=testuser;Password=testpass;";
        using (var conn = new SqlConnection(connString))
        {
            try
            {
                conn.Open();
                Console.WriteLine("Connected to SQL Server");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Could not connect to SQL Server: {ex.Message}");
            }
        }
    }

    static void ConnectToOracle()
    {
        string connString = "User Id=testuser;Password=testpass;Data Source=localhost:1521/orcl;";
        using (var conn = new OracleConnection(connString))
        {
            try
            {
                conn.Open();
                Console.WriteLine("Connected to Oracle");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Could not connect to Oracle: {ex.Message}");
            }
        }
    }

    static void ConnectToMongoDB()
    {
        string connString = "mongodb://testuser:testpass@localhost:27017/testdb";
        var client = new MongoClient(connString);
        try
        {
            var database = client.GetDatabase("testdb");
            Console.WriteLine("Connected to MongoDB");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Could not connect to MongoDB: {ex.Message}");
        }
    }
}
