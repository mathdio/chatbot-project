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

INSERT INTO `Users`
VALUES (1, 'João Silva', 'joaosilva', '123456');

INSERT INTO `Conversations`
VALUES (1, 1, '../frontend/public/data/conversation-id-1.csv', '2023-07-17 20:24:39'),
(2, 1, '../frontend/public/data/conversation-id-2.csv', '2023-07-17 20:25:14');