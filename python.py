# test.py

import cx_Oracle
import mysql.connector
import psycopg2
import pyodbc
from pymongo import MongoClient

# Define your connection strings and other necessary info
conn_info = {
    'PostgreSQL': {
        'connection_string': "dbname='testdb' user='testuser' host='localhost' password='testpass' port='5432'"
    },
    'MySQL': {
        'connection_string': "host='localhost' user='testuser' passwd='testpass' db='testdb' port=3306"
    },
    'SQLServer': {
        'connection_string': "DRIVER={SQL Server};SERVER=localhost;DATABASE=testdb;UID=testuser;PWD=testpass"
    },
    'Oracle': {
        'connection_string': "testuser/testpass@localhost:1521/orcl"
    },
    'MongoDB': {
        'connection_string': "mongodb://testuser:testpass@localhost:27017/testdb"
    }
}


def connect_to_postgresql():
    try:
        conn = psycopg2.connect(conn_info['PostgreSQL']['connection_string'])
        print('Connected to PostgreSQL')
        conn.close()
    except Exception as e:
        print(f"Could not connect to PostgreSQL: {e}")


def connect_to_mysql():
    try:
        conn = mysql.connector.connect(
            host='localhost', user='testuser', password='testpass', database='testdb'
        )
        print('Connected to MySQL')
        conn.close()
    except Exception as e:
        print(f"Could not connect to MySQL: {e}")


def connect_to_sqlserver():
    try:
        conn = pyodbc.connect(conn_info['SQLServer']['connection_string'])
        print('Connected to SQL Server')
        conn.close()
    except Exception as e:
        print(f"Could not connect to SQL Server: {e}")


def connect_to_oracle():
    try:
        conn = cx_Oracle.connect(conn_info['Oracle']['connection_string'])
        print('Connected to Oracle')
        conn.close()
    except Exception as e:
        print(f"Could not connect to Oracle: {e}")


def connect_to_mongodb():
    try:
        client = MongoClient(conn_info['MongoDB']['connection_string'])
        print('Connected to MongoDB')
        client.close()
    except Exception as e:
        print(f"Could not connect to MongoDB: {e}")


# Call the functions to attempt to connect to each database
connect_to_postgresql()
connect_to_mysql()
connect_to_sqlserver()
connect_to_oracle()
connect_to_mongodb()
