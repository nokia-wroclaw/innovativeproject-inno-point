# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.25)
# Database: inno-point
# Generation Time: 2019-03-20 21:35:21 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table project
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(50) DEFAULT NULL,
  `description` text,
  `team_id` int(10) unsigned DEFAULT NULL,
  `goals` char(255) DEFAULT '',
  `scopes` char(255) DEFAULT NULL,
  `number_of_members` int(10) unsigned DEFAULT NULL,
  `technology` char(255) DEFAULT NULL,
  `tags` char(255) DEFAULT NULL,
  `mentor_id` int(11) unsigned DEFAULT NULL,
  `requirements` char(255) DEFAULT NULL,
  `academic_contact_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `team` (`team_id`),
  KEY `mentor` (`mentor_id`),
  KEY `academic_contact` (`academic_contact_id`),
  CONSTRAINT `academic_contact` FOREIGN KEY (`academic_contact_id`) REFERENCES `user` (`id`),
  CONSTRAINT `mentor` FOREIGN KEY (`mentor_id`) REFERENCES `user` (`id`),
  CONSTRAINT `team` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;

INSERT INTO `project` (`id`, `name`, `description`, `team_id`, `goals`, `scopes`, `number_of_members`, `technology`, `tags`, `mentor_id`, `requirements`, `academic_contact_id`)
VALUES
	(1,'name','desc',NULL,'asdfasfas','daasdas',5,'asdasd','tag1,tag2,tag3',NULL,'asdasdas',NULL),
	(2,'name','desc',NULL,'asdfasfas','daasdas',3,'asdasd','tag1,tag2,tag3',NULL,'asdasdas',NULL),
	(3,'name','desc',NULL,'asdfasfas','daasdas',5,'asdasd','tag1,tag2,tag3',NULL,'asdasdas',NULL),
	(4,'name','desc',NULL,'asdfasfas','daasdas',4,'asdasd','tag1,tag2,tag3',NULL,'asdasdas',NULL),
	(5,'name','desc',NULL,'asdfasfas','daasdas',5,'asdasd','tag1,tag2,tag3',NULL,'asdasdas',NULL),
	(6,'sadf','asdf',NULL,'undefined','undefined',6,'undefined','tag1,tag2,tag3',NULL,'undefined',NULL);

/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table team
# ------------------------------------------------------------

DROP TABLE IF EXISTS `team`;

CREATE TABLE `team` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `leader_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `leader` (`leader_id`),
  CONSTRAINT `leader` FOREIGN KEY (`leader_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;

INSERT INTO `team` (`id`, `leader_id`)
VALUES
	(1,NULL),
	(2,NULL),
	(3,NULL),
	(4,NULL);

/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(25) DEFAULT NULL,
  `surname` char(25) DEFAULT NULL,
  `team_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_team` (`team_id`),
  CONSTRAINT `user_team` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `name`, `surname`, `team_id`)
VALUES
	(1,'Dominik','Slawkowski',1),
	(2,'Kamil','Kucharski',1),
	(3,'Jakub','Pawłowski',2),
	(4,'Artur','Frącala',2),
	(5,'Karol','Maśluch',3);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
