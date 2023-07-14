CREATE DATABASE IF NOT EXISTS users;
USE users;
CREATE TABLE `Users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    `url` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);


