# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.25)
# Database: inno-point
# Generation Time: 2019-03-25 18:53:33 +0000
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

INSERT INTO `project` (`id`, `name`, `short_description`, `long_description`, `team_id`, `goals`, `scopes`, `number_of_members`, `technology`, `tags`, `mentor_id`, `requirements`, `academic_contact_id`, `theme_color`)
VALUES
	(1,'Auctor eu augue','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',1,'Suspendisse faucibus interdum posuere lorem ipsum,Nulla porttitor massa id neque aliquam,Ultrices dui sapien eget mi proin sed','Molestie at elementum eu facilisis sed odio morbi quis commodo. Mattis nunc,Fringilla est ullamcorper eget nulla,Vulputate odio ut enim blandit volutpat maecenas',5,'React.js,JavaScript,Node.js,CSS,HTML','tag1,tag2,tag3',NULL,'asdasdas',NULL,'#3f51b5'),
	(2,'Scelerisque mauris','A pellentesque sit amet porttitor eget. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl.','But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',2,'Molestie at elementum eu facilisis sed odio morbi quis commodo. Mattis nunc,Fringilla est ullamcorper eget nulla,Vulputate odio ut enim blandit volutpat maecenas','Dignissim suspendisse in est ante in nibh,Fames ac turpis egestas integer. Sagittis eu volutpat odio facilisis mauris sit amet,In pellentesque massa placerat',3,'Angular,JavaScript,TypeScript,CSS,HTML','tag1,tag2,tag3',NULL,'asdasdas',NULL,'#05bbd4'),
	(3,'Elementum nisi','Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Faucibus turpis in eu mi bibendum neque ','At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',3,'Dignissim suspendisse in est ante in nibh,Fames ac turpis egestas integer. Sagittis eu volutpat odio facilisis mauris sit amet,In pellentesque massa placerat','Suspendisse faucibus interdum posuere lorem ipsum,Nulla porttitor massa id neque aliquam,Ultrices dui sapien eget mi proin sed',5,'C++,Microcontrolers,Python,Machine Lerning','tag1,tag2,tag3',NULL,'asdasdas',NULL,'#9b26b0'),
	(4,'Labore facere ea dol','Quas delectus quis QuasQuas Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Ullamcorper ','On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour',4,'undefined','undefined',7,'undefined','lkhj',NULL,'undefined',NULL,'#009688');

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
	(4,NULL),
	(2,2),
	(3,3),
	(1,28977211);

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
	(28977211,'Dominik',NULL,'dominik.slawkowski@gmail.com',1,NULL,'https://avatars0.githubusercontent.com/u/28977211?v=4');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
