CREATE DATABASE desafio02;

USE desafio02;

CREATE TABLE people(
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL
); 

INSERT INTO people (name) values('Hermes Hostin');
