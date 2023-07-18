# Chatbot project
A chatbot-mobile-like web application.
## 💻 About this project
The applicaiton has two pages: chatbot page and history page. The last one will only load if the user log in by passing parameters in chatbot page. Both pages has a header, wich has 3 elements:

- the name of page accompanied by a circle icon, in the left side of the header;
- a button the will redirect to the other page, in the center of the header;
- a button to log out, in the right side of the header.

The chatbot page has a footer with an input and a button to type and send messages. To trigger a conversation with the bot, the user must send a message with one of the following terms: "Hello,", "Good,", "I want,". 

After that, the bot will require an username and a password. Upping the back-end will seed the database with an user that can be used to test the applicaiton. Username in database is `joaosilva` e password is `123456`.

Thenceforth, the user can continue to send messages to bot. If some message has the term "loan", the bot will answer displaying three options that can be selected to show info and a reference link.

Sending a message with the term "goodbye", the conversation will be finished and saved in database as a CSV file.

After log in by sending valid username and password in chatbot, the user can access history page to be able to download the past conversations. All conversations of the user will be shown in a table, in wich each conversation will have the date and time and a download button.

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
