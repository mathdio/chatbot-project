# Chatbot project
A chatbot-mobile-like web application.
## 💻 About this project

## 🏁 Getting started
### 🐳 Installing Docker and Docker Compose
As the project is containerized, to run the application you will need to install both softwares. The Docker Compose version used in this project is 2.5. 
You can see [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) or in the [docs](https://docs.docker.com/compose/install/) how to install it.

### 🌱 Defining enviroment variables
You can create in project root a `.env` file as below:
```
MYSQLUSER=root
MYSQLPASSWORD=root
MYSQL_ROOT_PASSWORD=root
MYSQLPORT=3306 
MYSQLHOST=db
```
In `./app/backend`, create a `.env` file with the following content:
```
MYSQLUSER=root
MYSQLPASSWORD=root
MYSQL_ROOT_PASSWORD=root
MYSQLPORT=3306 
MYSQLHOST=db
```

### 📦 Creating and starting the application's containers
In project root, run:
```
npm run compose:up
``` 
You can also stop and remove the containers by running the following command:
```
npm run compose:down
```

### 🏃‍♀️ Running the application
Creating the containers must start them automatically.
#### Starting back-end layer
In a terminal, run:
```
docker exec -it chatbot-backend sh
```
Inside the container, run the following command:
```
cd app && cd backend
```
Install the dependencies by running:
```
npm install
```
Start the server by running:
```
npm run dev
```
With back-end running, you can access the application in a web browser throught the following URL:
```
http://localhost:3000/chatbot
```

You can alternatively stop front-end and back-end containers and starting each layer by installing the dependencies with `npm install` command in project root, front-end directory and back-end directory. Run the command `npm start` to start the front-end and run `npm run dev` to start the back-end. 