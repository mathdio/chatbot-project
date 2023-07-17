CREATE DATABASE IF NOT EXISTS chatbot;
USE chatbot;
CREATE TABLE `Users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `username` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Conversations` (
    `id` int NOT NULL AUTO_INCREMENT,
    `user_id` int NOT NULL,
    `url` varchar(255) NOT NULL,
    `date` DATETIME,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
);

INSERT INTO
    `Users`
VALUES
    (1, 'João Silva', 'joaosilva', '123456');