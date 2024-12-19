# Attendance Tracker

## Getting started

Copy the .env.example file as .env in both the `client` and `server` directories.

#### Run the client

```
cd client
npm install
npm run dev
```

### Run the server

```
cd server
composer install
php artisan key:generate
php artisan serve
```

## Database

```sh

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_DATABASE=attendance_tracker -p 3306:3306 -d mysql:latest

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=rootpassword -p 3306:3306 -d mysql:latest

when connecting with workbench, use the url: jdbc:mysql://localhost:3306?allowPublicKeyRetrieval=true&useSSL=false
```


## Logging

when using var_dump(), they are sent to the http response, ie from postman
logs are places at storage/logs folder when logging with: Log::info("Debugging Sessions", ['sessions' => $sessions]);



## Important commands

```
php artisan make:controller SessionController


// CREATE THE TABLES
php artisan make:migration create_sessions_table
php artisan make:migration create_attendances_table
php artisan migrate

composer require nesbot/carbon


php artisan make:middleware CheckAdminCredentials

```

## Deployment

https://blog.railway.com/p/github-actions 

https://docs.railway.com/guides/laravel 

### Railway

1. Create a service mysql
2. Create another service from github repo

make sure to set the variables


##### Locally [production test]
```
// build the image. assuming .env is in the root
cat .env | xargs -I {} docker build --build-arg {} -t laravel-react-app .
docker run -d -p 80:80 --name laravel-react-app laravel-react-app


docker run -p 8080:80 --name laravel-react-app laravel-react-app


```
## Troubleshoot

1. "No application encryption key has been specified": try running this command

    ```sh 
    php artisan key:generate
    ```