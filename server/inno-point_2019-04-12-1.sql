# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.25)
# Database: inno-point
# Generation Time: 2019-04-12 10:42:01 +0000
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
  `short_description` text,
  `long_description` text,
  `team_id` int(10) unsigned DEFAULT NULL,
  `goals` char(255) DEFAULT '',
  `scopes` char(255) DEFAULT NULL,
  `number_of_members` int(10) unsigned DEFAULT NULL,
  `technology` char(255) DEFAULT NULL,
  `tags` char(255) DEFAULT NULL,
  `mentor_id` int(11) unsigned DEFAULT NULL,
  `requirements` char(255) DEFAULT NULL,
  `academic_contact_id` int(10) unsigned DEFAULT NULL,
  `theme_color` char(11) DEFAULT NULL,
  `verified` tinyint(4) DEFAULT '0',
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

INSERT INTO `project` (`id`, `name`, `short_description`, `long_description`, `team_id`, `goals`, `scopes`, `number_of_members`, `technology`, `tags`, `mentor_id`, `requirements`, `academic_contact_id`, `theme_color`, `verified`)
VALUES
	(1,'InnoPoint','Platform to projects management.','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',1,'Suspendisse faucibus interdum posuere lorem ipsum,Nulla porttitor massa id neque aliquam,Ultrices dui sapien eget mi proin sed','Molestie at elementum eu facilisis sed odio morbi quis commodo. Mattis nunc,Fringilla est ullamcorper eget nulla,Vulputate odio ut enim blandit volutpat maecenas',5,'React.js,JavaScript,Node.js,CSS,HTML','Platforma,Projekty,WebDev',NULL,'asdasdas',NULL,'#3f51b5',1),
	(2,'ReportApp','Bugs reporting and cataloging application','But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',2,'Molestie at elementum eu facilisis sed odio morbi quis commodo. Mattis nunc,Fringilla est ullamcorper eget nulla,Vulputate odio ut enim blandit volutpat maecenas','Dignissim suspendisse in est ante in nibh,Fames ac turpis egestas integer. Sagittis eu volutpat odio facilisis mauris sit amet,In pellentesque massa placerat',3,'Angular,JavaScript,TypeScript,CSS,HTML','Bugs,Reporting,App',NULL,'asdasdas',NULL,'#05bbd4',1),
	(31,'LiveForms','LiveForms',NULL,NULL,'undefined','undefined',4,'undefined','super projekt, tomek na leadera',NULL,'undefined',NULL,'#2196f3',0);

/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table team
# ------------------------------------------------------------

DROP TABLE IF EXISTS `team`;

CREATE TABLE `team` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `leader_id` int(10) unsigned DEFAULT NULL,
  `project_id` int(11) unsigned DEFAULT NULL,
  `open` tinyint(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `leader` (`leader_id`),
  KEY `project` (`project_id`),
  CONSTRAINT `leader` FOREIGN KEY (`leader_id`) REFERENCES `user` (`id`),
  CONSTRAINT `project` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;

INSERT INTO `team` (`id`, `leader_id`, `project_id`, `open`)
VALUES
	(1,28977211,1,0),
	(2,5,NULL,0),
	(3,7,2,1);

/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(25) DEFAULT NULL,
  `surname` char(25) DEFAULT NULL,
  `email` char(50) DEFAULT NULL,
  `team_id` int(10) unsigned DEFAULT NULL,
  `github_id` int(50) DEFAULT NULL,
  `github_picture` char(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_team` (`team_id`),
  CONSTRAINT `user_team` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `team_id`, `github_id`, `github_picture`)
VALUES
	(2,'Kamil','Kucharski',NULL,1,NULL,NULL),
	(3,'Jakub','Pawłowski',NULL,1,NULL,NULL),
	(4,'Artur','Frącala',NULL,2,NULL,NULL),
	(5,'Karol','Maśluch',NULL,2,NULL,NULL),
	(6,'Mateusz','Witkowski',NULL,2,NULL,NULL),
	(7,'Wojciech','Dunaj',NULL,3,NULL,NULL),
	(8,'Daria','Łabaj',NULL,3,NULL,NULL),
	(9,'Alicja','Zalewska',NULL,3,NULL,NULL),
	(3074083,'Jakub Sikora',NULL,'null',NULL,NULL,'https://avatars0.githubusercontent.com/u/3074083?v=4'),
	(28977211,'Dominik',NULL,'dominik.slawkowski@gmail.com',1,NULL,'https://avatars0.githubusercontent.com/u/28977211?v=4'),
	(31382349,'Tomasz Przybył',NULL,'tomasz.przybyl.it@gmail.com',NULL,NULL,'https://avatars0.githubusercontent.com/u/31382349?v=4');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
