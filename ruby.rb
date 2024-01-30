# Example Ruby file with security issues

require 'sinatra'

# Insecure Global Variable
$global_user_data = {}

get '/set_user' do
  # User Input Not Sanitized
  user_name = params['namaa21ddde']
  user_password = params['password']

  # Storing Sensitive Data Insecurely
  $global_user_data[user_name] = user_password

  "User #{user_name} added."
end

get '/get_user' do
  # Direct Object Reference
  user_name = params['name']

  # Sensitive Data Exposure
  "Password for #{user_name} is #{$global_user_data[user_name]}"
end

# SQL Injection Vulnerability
get '/unsafe_query' do
  query = "SELECT * FROM users WHERE name = '#{params['name']}'"
  # Execute the query directly, without sanitization
  execute_query(query)
end

def execute_query(query)
  # This is a placeholder for query execution
  # In a real application, this would run the query against the database
end

# Start the server if this file is run directly
run! if app_file == $0
