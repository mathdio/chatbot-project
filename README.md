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

## 🛠️ Built with
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" /></a>
<a href="https://www.docker.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /></a>
<a href="https://www.mysql.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" /></a>
  <a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>

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
Inside the container, install the dependencies running the following command in `./app/backend` folder:
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
