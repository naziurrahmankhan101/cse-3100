## Database

```sh

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_DATABASE=attendance_tracker -p 3306:3306 -d mysql:latest

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=rootpassword -p 3306:3306 -d mysql:latest

when connecting with workbench, use the url: jdbc:mysql://localhost:3306?allowPublicKeyRetrieval=true&useSSL=false
```