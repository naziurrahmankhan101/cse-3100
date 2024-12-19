# Step 1: Use the official MySQL image
FROM mysql:8.0

# Step 2: Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=my_database
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# Step 3: Copy the SQL migration files into the container
# /docker-entrypoint-initdb.d/ directory is a special directory in the official MySQL Docker image. 
#  Any .sql scripts placed here will be executed automatically when the MySQL server starts for the first time.
COPY ./migrations /docker-entrypoint-initdb.d/

# Step 4: Expose the default MySQL port
EXPOSE 3306
