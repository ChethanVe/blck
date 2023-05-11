-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: blck_luxury
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `add_coupon`
--

DROP TABLE IF EXISTS `add_coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `add_coupon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_type` varchar(50) NOT NULL,
  `code` varchar(100) NOT NULL,
  `start_date` varchar(100) NOT NULL,
  `end_date` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `discounts_type` enum('Amount','Percentage') NOT NULL,
  `max_discount_amount` varchar(100) DEFAULT NULL,
  `discounts_in_amount` varchar(100) DEFAULT NULL,
  `deduct_deposit` enum('Allow','Not Allow') NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_coupon`
--

LOCK TABLES `add_coupon` WRITE;
/*!40000 ALTER TABLE `add_coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `add_coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agent_info`
--

DROP TABLE IF EXISTS `agent_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agent_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `agent_name` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `alter_email` varchar(100) NOT NULL,
  `phone` bigint NOT NULL,
  `alt_phone` bigint NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `alt_phone` (`alt_phone`),
  UNIQUE KEY `alter_email` (`alter_email`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agent_info`
--

LOCK TABLES `agent_info` WRITE;
/*!40000 ALTER TABLE `agent_info` DISABLE KEYS */;
INSERT INTO `agent_info` VALUES (1,'Mahesh','Bangalore','mahesh@gmail.com','mahesh12@gmail.com',5656765676,8787678767,'Active');
/*!40000 ALTER TABLE `agent_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS `alembic_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alembic_version`
--

LOCK TABLES `alembic_version` WRITE;
/*!40000 ALTER TABLE `alembic_version` DISABLE KEYS */;
INSERT INTO `alembic_version` VALUES ('ded20ddcc4af');
/*!40000 ALTER TABLE `alembic_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_brand`
--

DROP TABLE IF EXISTS `car_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_brand` varchar(100) NOT NULL,
  `car_logo` varchar(1000) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `car_brand` (`car_brand`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_brand`
--

LOCK TABLES `car_brand` WRITE;
/*!40000 ALTER TABLE `car_brand` DISABLE KEYS */;
INSERT INTO `car_brand` VALUES (1,'BMW','car_brand/bmw.png','Active'),(4,'Mercedes','car_brand/mercedes-benz.png','Active'),(7,'Audi','car_brand/Audi.svg','Active'),(11,'Jaguar','car_brand/Jaguar [Converted]-01.svg','Active'),(16,'Land Rover','car_brand/land-rover.png','Active'),(32,'Kia','car_brand/kia.png','Active'),(40,'Porsche','car_brand/porsche-6-logo-png-transparent.png','Active'),(42,'Mahindra','car_brand/Mahindra-SUV.svg','Active'),(46,'Lamborghini','car_brand/lamborghini.svg','Active'),(47,'Jeep','car_brand/jeep-5-logo-png-transparent.png','Active'),(48,'Hyundai','car_brand/hyundai.svg','Active'),(49,'Ford','car_brand/ford.png','Active'),(50,'Toyota','car_brand/imgbin_toyota-camry-car-toyota-fj-cruiser-logo-png.png','Active'),(51,'Bentley','car_brand/bentley-motors-1-logo-png-transparent.png','Active'),(52,'Volvo','car_brand/volvo-logo-png-transparent.png','Active'),(53,'Honda','car_brand/clipart4550348.png','Active'),(56,'Isuzu','car_brand/Artboard 1.svg','Active'),(57,'BYD','car_brand/BYD_Auto_Logo.svg','Active'),(58,'Rolls Royce','car_brand/Rolls-royce.svg','Active'),(59,'Lexus','car_brand/lexus_new_image.png','Active'),(60,'Range Rover','car_brand/RANDROVER-BADGE-MGR_800x.webp','Active');
/*!40000 ALTER TABLE `car_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_details`
--

DROP TABLE IF EXISTS `car_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_brand` varchar(100) NOT NULL,
  `car_model` varchar(100) NOT NULL,
  `car_type` varchar(100) NOT NULL,
  `use_type` enum('Self Drive','Chauffeur Driven','Airport Pickup Drop') NOT NULL,
  `features` varchar(100) NOT NULL,
  `specs` varchar(100) NOT NULL,
  `rent` decimal(10,0) NOT NULL,
  `availablity_count` decimal(10,0) NOT NULL,
  `car_features` varchar(100) NOT NULL,
  `fuel` enum('Petrol','Disel','Electric','Hybrid') NOT NULL,
  `gear` enum('Manual','Automatic') NOT NULL,
  `luggage` varchar(600) NOT NULL,
  `seats` varchar(600) NOT NULL,
  `locations_available` varchar(600) DEFAULT NULL,
  `car_image` varchar(600) DEFAULT NULL,
  `slider_images` varchar(600) DEFAULT NULL,
  `status` enum('Active','Inactive') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_details`
--

LOCK TABLES `car_details` WRITE;
/*!40000 ALTER TABLE `car_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_features`
--

DROP TABLE IF EXISTS `car_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_features` (
  `id` int NOT NULL AUTO_INCREMENT,
  `feature_name` varchar(100) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `preview` varchar(600) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `description` varchar(600) NOT NULL,
  `files` varchar(600) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_features`
--

LOCK TABLES `car_features` WRITE;
/*!40000 ALTER TABLE `car_features` DISABLE KEYS */;
INSERT INTO `car_features` VALUES (1,'Sunroof','car_features/car_sunroof.jpg','-','Active','Sunroof','car_sunroof.jpg'),(3,'Sound_System','car_features/Premium Sound Systems.jpeg','-','Active','Sound system','Premium Sound Systems.jpeg');
/*!40000 ALTER TABLE `car_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_fleet`
--

DROP TABLE IF EXISTS `car_fleet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_fleet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_brand` varchar(100) DEFAULT NULL,
  `car_model` varchar(100) DEFAULT NULL,
  `car_features` varchar(100) DEFAULT NULL,
  `fuel` varchar(100) DEFAULT NULL,
  `gear` varchar(100) DEFAULT NULL,
  `luggage` varchar(600) DEFAULT NULL,
  `seats` varchar(600) DEFAULT NULL,
  `car_image` varchar(600) DEFAULT NULL,
  `slider_images` varchar(600) DEFAULT NULL,
  `status` enum('Active','Inactive') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_fleet`
--

LOCK TABLES `car_fleet` WRITE;
/*!40000 ALTER TABLE `car_fleet` DISABLE KEYS */;
INSERT INTO `car_fleet` VALUES (1,'BMW','520 D','','Petrol','Automatic','5','5','car_fleet/Mark5_bmw_520d_1.webp','car_fleet_slider/rent_bmw_520d_2.webp,car_fleet_slider/rent_bmw_520d_3 (1).webp,car_fleet_slider/rent_bmw_520d_4.webp','Active'),(2,'Mercedes','E Class','','Disel','Automatic','6','6','car_fleet/Mark5_mercedes_e250_0.webp','car_fleet_slider/rent_mercedes_E350_1.webp,car_fleet_slider/rent_mercedes_E350_2.webp,car_fleet_slider/rent_mercedes_E350_3.webp','Active'),(3,'Mercedes','GLS 350','Sunroof','Disel','Automatic','4','4','car_fleet/Mark5_mercedes_gls_350d_0.webp','car_fleet_slider/rent_mercedes_gls_350d_1.webp,car_fleet_slider/rent_mercedes_gls_350d_2.webp,car_fleet_slider/rent_mercedes_gls_350d_3.webp','Active'),(4,'Mercedes','V Class','','Disel','Automatic','4','4','car_fleet/Mark5_mercedes_viano_0.webp','car_fleet_slider/rent_mercedes_viano_1.webp,car_fleet_slider/rent_mercedes_viano_2.webp,car_fleet_slider/rent_mercedes_viano_3.webp','Active'),(5,'Mercedes','V Class','Sunroof','Disel','Automatic','4','5','car_fleet/MERCEDES -V CLASS-0.png','car_fleet_slider/MERCEDES -V CLASS-1.png,car_fleet_slider/MERCEDES -V CLASS-2.png','Active'),(6,'Mercedes','Viano','','Disel','manual','6','6','car_fleet/Mark5_mercedes_viano_0.webp','car_fleet_slider/rent_mercedes_viano_1.webp,car_fleet_slider/rent_mercedes_viano_2.webp,car_fleet_slider/rent_mercedes_viano_3.webp','Active'),(7,'Mercedes','GLE','Sunroof','Disel','Automatic','6','6','car_fleet/Mark5_mercedes_gle_250_0.webp','car_fleet_slider/rent_mercedes_gle_250_1.webp,car_fleet_slider/rent_mercedes_gle_250_2.webp,car_fleet_slider/rent_mercedes_gle_250_3.webp','Active'),(8,'Mercedes','S  Class ','','Disel','Automatic','6','6','car_fleet/Mark5_mercedes_s350D_1.webp','car_fleet_slider/rent_mercedes_s350d_2.webp,car_fleet_slider/rent_mercedes_s350d_3.webp,car_fleet_slider/rent_mercedes_s350d_4.webp','Active'),(9,'Mercedes','S Class S 500','Sunroof','Disel','Automatic','7','7','car_fleet/Mark5_mercedes_s500_0.webp','car_fleet_slider/rent_mercedes_s500_1.webp,car_fleet_slider/rent_mercedes_s500_2.webp','Active'),(10,'BMW','5 Series','Sunroof','Disel','Automatic','6','6','car_fleet/Mark5_mercedes_s500_0.webp','car_fleet_slider/rent_mercedes_s500_1.webp,car_fleet_slider/rent_mercedes_s500_2.webp','Active'),(11,'BMW','7 Series','','Disel','Automatic','6','6','car_fleet/Mark5_bmw_720d_1.webp','car_fleet_slider/rent_bmw_720d_2.webp,car_fleet_slider/rent_bmw_720d_3.webp,car_fleet_slider/rent_bmw_720d_4.webp','Active'),(12,'Audi','A6','','Disel','Automatic','6','6','car_fleet/Mark5_audi_a6_0.webp','car_fleet_slider/rent_audi_a6_1.webp,car_fleet_slider/rent_audi_a6_2.webp,car_fleet_slider/rent_audi_a6_3.webp','Active'),(13,'Rolls Royce','Ghost','','Disel','Automatic','6','6','car_fleet/Mark5_rolls_royce_ghost_0.webp','car_fleet_slider/rent_rolls_royce_ghost_1.webp,car_fleet_slider/rent_rolls_royce_ghost_2.webp,car_fleet_slider/rent_rolls_royce_ghost_3.webp','Active'),(15,'Audi','A7','Sunroof,Sound_System','Electric','Automatic','6','6','car_fleet/Mark5_audi_a7_1.webp','car_fleet_slider/rent_audi_a7_2.webp,car_fleet_slider/rent_audi_a7_3.webp,car_fleet_slider/rent_audi_a7_4.webp','Active'),(16,'Jaguar','XF','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_jaguar_xf_1.webp','car_fleet_slider/rent_jaguar_xf_4.webp,car_fleet_slider/rent_jaguar_xf_3.webp,car_fleet_slider/rent_jaguar_xf_2.webp','Active'),(17,'Jaguar','XJL','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_jaguar_xjl_1.webp','car_fleet_slider/rent_jaguar_xjl_4.webp,car_fleet_slider/rent_jaguar_xjl_3.webp,car_fleet_slider/rent_jaguar_xjl_2.webp','Active'),(18,'Jaguar','F Pace','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_jaguar_fpace_1.webp','car_fleet_slider/rent_jaguar_fpace_4.webp,car_fleet_slider/rent_jaguar_fpace_3.webp,car_fleet_slider/rent_jaguar_fpace_2.webp','Active'),(19,'Toyota','Camry','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_toyota_camry_1.webp','car_fleet_slider/rent_toyota_camry_4.webp,car_fleet_slider/rent_toyota_camry_3.webp,car_fleet_slider/rent_toyota_camry_2.webp','Active'),(21,'Jaguar','F Type','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_jaguar_ftype_1.webp','car_fleet_slider/rent_jaguar_ftype_2.webp,car_fleet_slider/rent_jaguar_ftype_3.webp,car_fleet_slider/rent_jaguar_ftype_4.webp','Active'),(22,'Audi','A4','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_audi_a4_1.webp','car_fleet_slider/rent_audi_a4_2.webp,car_fleet_slider/rent_audi_a4_3.webp,car_fleet_slider/rent_audi_a4_4.webp','Active'),(23,'Audi','A6','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_audi_a6_0.webp','car_fleet_slider/rent_audi_a6_1.webp,car_fleet_slider/rent_audi_a6_2.webp,car_fleet_slider/rent_audi_a6_3.webp','Active'),(24,'Audi','A8','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_audi_a8_1.webp','car_fleet_slider/rent_audi_a8_2.webp,car_fleet_slider/rent_audi_a8_3.webp,car_fleet_slider/rent_audi_a8_4.webp','Active'),(25,'Audi','Q7','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_audi_q7_45_tdi_1.webp','car_fleet_slider/rent_audi_q7_45_2.webp,car_fleet_slider/rent_audi_q7_45_3.webp,car_fleet_slider/rent_audi_q7_45_4.webp','Active'),(26,'Audi','A3 Convertible','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_audi_a3_convertible_1.webp','car_fleet_slider/rent_audi_a3_convertible_2.webp,car_fleet_slider/rent_audi_a3_convertible_3.webp,car_fleet_slider/rent_audi_a3_convertible_4.webp','Active'),(27,'Audi','A5 Convertible','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_audi_a5_convertible_1.webp','car_fleet_slider/rent_audi_a5_convertible_2.webp,car_fleet_slider/rent_audi_a5_convertible_3.webp,car_fleet_slider/rent_audi_a5_convertible_4.webp','Active'),(28,'Audi','R8','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_audi_r8_1.webp','car_fleet_slider/rent_audi_r8_2.webp,car_fleet_slider/rent_audi_r8_3.webp,car_fleet_slider/rent_audi_r8_4.webp','Active'),(30,'Ford','Endeavour','Sunroof','Disel','Automatic','6','6','car_fleet/Mark5_ford_endeavour_1.webp','car_fleet_slider/rent_ford_endeavor_2.webp,car_fleet_slider/rent_ford_endeavor_3.webp,car_fleet_slider/rent_ford_endeavor_4.webp','Active'),(31,'Ford','Mastang','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_ford_endeavour_1.webp','car_fleet_slider/rent_ford_endeavor_2.webp,car_fleet_slider/rent_ford_endeavor_3.webp,car_fleet_slider/rent_ford_endeavor_4.webp','Active'),(32,'Bentley','Continental GT','Sunroof,Sound_System','Disel','manual','6','6','car_fleet/Mark5_bentley_continental_gt_1.webp','car_fleet_slider/rent_bentley_continental_gt_2.webp,car_fleet_slider/rent_bentley_continental_gt_3.webp,car_fleet_slider/rent_bentley_continental_gt_4.webp','Active'),(33,'Porsche','911 CARRERA','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_porsche_911_carerra_1.webp','car_fleet_slider/rent_porsche_911_carrera_2.webp,car_fleet_slider/rent_porsche_911_carrera_3.webp,car_fleet_slider/rent_porsche_911_carrera_4.webp','Active'),(34,'Honda','City','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_honda_city_1.webp','car_fleet_slider/rent_honda_city_2.webp,car_fleet_slider/rent_honda_city_3.webp,car_fleet_slider/rent_honda_city_4.webp','Active'),(35,'Kia','Carnival ','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_kia_carnival_1.webp','car_fleet_slider/rent_kia_carnival_2.webp,car_fleet_slider/rent_kia_carnival_3.webp,car_fleet_slider/rent_kia_carnival_4.webp','Active'),(36,'Mahindra','Thar','Sunroof','Disel','Automatic','6','6','car_fleet/Mark5_mahindra_thar_1.webp','car_fleet_slider/rent_mahindra_thar_2.webp,car_fleet_slider/rent_mahindra_thar_3.webp,car_fleet_slider/rent_mahindra_thar_4.webp','Active'),(37,'Volvo','S60','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_volvo_s60_1.webp','car_fleet_slider/rent_volvo_xc60_2.webp,car_fleet_slider/rent_volvo_xc60_3.webp,car_fleet_slider/rent_volvo_xc60_4.webp','Active'),(38,'Volvo','S90','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_volvo_s90_1.webp','car_fleet_slider/rent_volvo_s90_2.webp,car_fleet_slider/rent_volvo_s90_3.webp,car_fleet_slider/rent_volvo_s90_4.webp','Active'),(39,'Volvo','XC60','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_volvo_xc60_1.webp','car_fleet_slider/rent_volvo_xc60_2.webp,car_fleet_slider/rent_volvo_xc60_3.webp,car_fleet_slider/rent_volvo_xc60_4.webp','Active'),(40,'Volvo','XC90','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_volvo_xc90_1.webp','car_fleet_slider/rent_volvo_xc90_2.webp,car_fleet_slider/rent_volvo_xc90_3.webp,car_fleet_slider/rent_volvo_xc90_4.webp','Active'),(41,'Lamborghini','Gallardo','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_lamborghini_gallardo_1.webp','car_fleet_slider/rent_lamborghini_gallardo_2.webp,car_fleet_slider/rent_lamborghini_gallardo_3.webp,car_fleet_slider/rent_lamborghini_gallardo_4.webp','Active'),(42,'Land Rover','Discovery Sport','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_landrover_discovery_sport_1.webp','car_fleet_slider/rent_landrover_discovery_sport_2.webp,car_fleet_slider/rent_landrover_discovery_sport_3.webp,car_fleet_slider/rent_landrover_discovery_sport_4.webp','Active'),(43,'Lexus','ES 300H','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_lexus_es300_1.webp','car_fleet_slider/rent_lexus_es_300h_2.webp,car_fleet_slider/rent_lexus_es_300h_3.webp,car_fleet_slider/rent_lexus_es_300h_4.webp','Active'),(44,'Toyota',' Hyryder','Sunroof,Sound_System','Disel','manual','6','6','car_fleet/hyryder_Apqnz0OA7.webp','car_fleet_slider/hyryder1_2qFdCbnOJ.webp,car_fleet_slider/hyryder2_V_H_WKsRN.webp,car_fleet_slider/hyryder3_iAxGejUok.webp,car_fleet_slider/hyryder4_EPqEclpJC.webp','Active'),(45,'Toyota','Crysta Hycross','','Disel','Automatic','6','6','car_fleet/hycross_1_M5Mgg29rr.webp','car_fleet_slider/hycross-2_HopIC990Z.webp,car_fleet_slider/hycross-3_zNQcSZxtO.webp,car_fleet_slider/hycross-4_BnCUnrBWb.webp,car_fleet_slider/hycross-5_s1Ve4-BFH.webp','Active'),(46,'Toyota','Alphard','','Disel','Automatic','6','6','car_fleet/Mark5_toyota_alphard_1.webp','car_fleet_slider/rent_toyota_alphard_2.webp,car_fleet_slider/rent_toyota_alphard_3.webp','Active'),(47,'Toyota','Land Cruiser','','Disel','Automatic','6','6','car_fleet/Mark5__toyota_landcruiser_1.webp','car_fleet_slider/rent_toyota_land_cruiser_2.webp,car_fleet_slider/rent_toyota_land_cruiser_3.webp,car_fleet_slider/rent_toyota_land_cruiser_4.webp','Active'),(48,'Toyota','Vellfire','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/velfire_R-t8gFrwI.webp','car_fleet_slider/velfire1_XrUUkM5DI.webp,car_fleet_slider/velfire2_kdiIyzhk9.webp,car_fleet_slider/velfire3_hcX9NnsVJ.webp,car_fleet_slider/velfire4_B7z5pStKKq.webp,car_fleet_slider/velfire5_gbqcMyuO5p.webp','Active'),(49,'Toyota','Corolla Altis','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_toyota_corolla_altis_1.webp','car_fleet_slider/rent_toyota_corolla_altis_2.webp,car_fleet_slider/rent_toyota_corolla_altis_3.webp,car_fleet_slider/rent_toyota_corolla_altis_4.webp','Active'),(50,'Toyota','Commuter (Custom)','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_toyota_commuter_1.webp','car_fleet_slider/rent_toyota_commuter_2.webp','Active'),(51,'Toyota','Fortuner','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_toyota_fortuner_1.webp','car_fleet_slider/rent-toyota_fortuner_2.webp,car_fleet_slider/rent-toyota_fortuner_3.webp,car_fleet_slider/rent-toyota_fortuner_4.webp','Active'),(52,'Toyota','Innova Crysta','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_toyota_crysta_1.webp','car_fleet_slider/rent_toyota_crysta_4.webp,car_fleet_slider/rent_toyota_crysta_3.webp,car_fleet_slider/rent_toyota_crysta_2.webp','Active'),(53,'Range Rover','Sport','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_range_rover_hse_sport_1.webp','car_fleet_slider/rent_range_rover_hse_sport_2.webp,car_fleet_slider/rent_range_rover_hse_sport_3.webp,car_fleet_slider/rent_range_rover_hse_sport_4.webp','Active'),(54,'Range Rover','Vogue','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_range_rover_vogue.webp','car_fleet_slider/rent_range_rover_vogue_2.webp,car_fleet_slider/rent_range_rover_vogue_3.webp,car_fleet_slider/rent_range_rover_vogue_4.webp','Active'),(55,'BMW','X5','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/go.webp','car_fleet_slider/rent_bmw_x5_2.webp,car_fleet_slider/rent_bmw_x5_3.webp,car_fleet_slider/rent_bmw_x5_4.webp','Active'),(56,'Mercedes','GLS 400','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/rent_mercedes_gls_350d_2 copy0.webp','car_fleet_slider/rent_mercedes_gls_350d_1.webp,car_fleet_slider/rent_mercedes_gls_350d_2.webp,car_fleet_slider/rent_mercedes_gls_350d_3.webp','Active'),(57,'Mercedes','Maybach S 600','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_mercedes_maybach_s600_0.webp','car_fleet_slider/rent_mercedes_maybach_s600_1.webp,car_fleet_slider/rent_mercedes_maybach_s600_2.webp,car_fleet_slider/rent_mercedes_maybach_s600_3.webp','Active'),(58,'Mercedes','EQS','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Merc-eqs-Landing_e5rRJ-Sj-0.webp','car_fleet_slider/Merc-eqs1_55rJkxIrh_1.webp,car_fleet_slider/Merc-eqs2_v40c1vIkS_2.webp,car_fleet_slider/Merc-eqs4_muZBY7Ku_4 .webp','Active'),(59,'BMW','GT','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_bmw_gt_1.webp','car_fleet_slider/rent_bmw_gt_2.webp,car_fleet_slider/rent_bmw_gt_3.webp,car_fleet_slider/rent_bmw_gt_4.webp','Active'),(60,'BMW','X3','Sunroof,Sound_System','Disel','Automatic','6','6','car_fleet/Mark5_bmw_x3_1.webp','car_fleet_slider/rent_bmw_x3_2.webp,car_fleet_slider/rent_bmw_x3_3.webp,car_fleet_slider/rent_bmw_x3_4.webp','Active'),(61,'BMW','Z4','','Disel','Automatic','6','6','car_fleet/Mark5_bmw_z4_1.webp','car_fleet_slider/rent-bmw_z4_2.webp,car_fleet_slider/rent_bmw_z4_3.webp,car_fleet_slider/rent_bmw_z4_4.webp','Active'),(62,'Mercedes','ML 350','','Disel','Automatic','6','6','car_fleet/Mark5_Mercedes_ML_1.webp','car_fleet_slider/rent-mercedes_ml_2.webp,car_fleet_slider/rent-mercedes_ml_3.webp,car_fleet_slider/rent-mercedes_ml_4.webp','Active'),(63,'Mercedes','GLC','','Disel','Automatic','6','6','car_fleet/Mark5_mercedes_glc220_1.webp','car_fleet_slider/Mark5_mercedes_glc220_1.webp,car_fleet_slider/rent_mercedes_glc_220_2.webp,car_fleet_slider/rent_mercedes_glc_220_3.webp','Active'),(64,'Mercedes','GLA','','Disel','Automatic','6','6','car_fleet/Mark5_mercedes_gla_220_1.webp','car_fleet_slider/rent_mercedes_gla_220_1.webp,car_fleet_slider/rent_mercedes_gla_220_3.webp,car_fleet_slider/rent_mercedes_gla_220_4.webp','Active'),(65,'Mercedes','C Class','','Disel','Automatic','6','6','car_fleet/Mark5_mercedes_c250_0.webp','car_fleet_slider/rent_mercedes_c250_1.webp,car_fleet_slider/rent_mercedes_c250_2.webp,car_fleet_slider/rent_mercedes_c250_3.webp','Active');
/*!40000 ALTER TABLE `car_fleet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_location`
--

DROP TABLE IF EXISTS `car_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(100) NOT NULL,
  `location_status` enum('Popular','Unpopular') NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `location` (`location`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_location`
--

LOCK TABLES `car_location` WRITE;
/*!40000 ALTER TABLE `car_location` DISABLE KEYS */;
INSERT INTO `car_location` VALUES (1,'Bangalore','Unpopular','Active'),(2,'Pune','Popular','Active'),(3,'Chennai','Popular','Active'),(4,'Delhi','Popular','Active'),(5,'Hyderabad','Popular','Active'),(6,'Goa','Popular','Active'),(7,'Mumbai','Popular','Active'),(8,'Chandigarh','Unpopular','Active'),(9,'Ahmedabad','Unpopular','Active'),(10,'Mangalore','Unpopular','Active'),(11,'Coimbatore','Popular','Active');
/*!40000 ALTER TABLE `car_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_rentals`
--

DROP TABLE IF EXISTS `car_rentals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_rentals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_type` enum('chauffeur_Driven','Airport_Pickup/Drop','Self_Drive') NOT NULL,
  `extra_kms` int NOT NULL,
  `rental_price` int NOT NULL,
  `deposit` int NOT NULL,
  `model_name` int NOT NULL,
  `location` enum('yes','no') NOT NULL,
  `agent` varchar(500) NOT NULL,
  `color` enum('yes','no') NOT NULL,
  `launching_year` int NOT NULL,
  `package_hours` int NOT NULL,
  `Kms_limits` int NOT NULL,
  `extraKm_charges` int NOT NULL,
  `Toll_fee` int NOT NULL,
  `Parking_fee` int NOT NULL,
  `Driver_batta` int NOT NULL,
  `status` enum('yes','no') NOT NULL,
  `filters` enum('yes','no') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `agent` (`agent`),
  UNIQUE KEY `rental_price` (`rental_price`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_rentals`
--

LOCK TABLES `car_rentals` WRITE;
/*!40000 ALTER TABLE `car_rentals` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_rentals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_type`
--

DROP TABLE IF EXISTS `car_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_type` enum('Chauffeur_Driven','Self_Drive') NOT NULL,
  `brand` varchar(100) NOT NULL,
  `carmodel` varchar(100) NOT NULL,
  `carstyle` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `agent` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `launch` varchar(100) NOT NULL,
  `deposit` varchar(100) NOT NULL,
  `driverbata` varchar(100) NOT NULL,
  `stndprice` varchar(100) NOT NULL,
  `stndpackagehr` varchar(100) NOT NULL,
  `stndextrakms` varchar(100) NOT NULL,
  `stndgstprice` varchar(100) NOT NULL,
  `outprice` varchar(100) NOT NULL,
  `outpackagehr` varchar(100) NOT NULL,
  `outextrakms` varchar(100) NOT NULL,
  `outgstprice` varchar(100) NOT NULL,
  `airprice` varchar(100) NOT NULL,
  `airtollfee` varchar(100) NOT NULL,
  `airparkingfee` varchar(100) NOT NULL,
  `airgstprice` varchar(100) NOT NULL,
  `carprice` varchar(100) NOT NULL,
  `status` enum('Active','Inactive') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_type`
--

LOCK TABLES `car_type` WRITE;
/*!40000 ALTER TABLE `car_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chauffeur_driven_airport`
--

DROP TABLE IF EXISTS `chauffeur_driven_airport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chauffeur_driven_airport` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_id` int NOT NULL,
  `car_type` enum('Chauffeur_Driven_Airport') NOT NULL,
  `car_style` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `forPrime` enum('yes','no') NOT NULL,
  `agent` int DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `launch` varchar(100) DEFAULT NULL,
  `deposit` int DEFAULT NULL,
  `price` int NOT NULL,
  `toll_fee` int NOT NULL,
  `parking_fee` int NOT NULL,
  `status` enum('Active','Inactive') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chauffeur_driven_airport`
--

LOCK TABLES `chauffeur_driven_airport` WRITE;
/*!40000 ALTER TABLE `chauffeur_driven_airport` DISABLE KEYS */;
INSERT INTO `chauffeur_driven_airport` VALUES (1,16,'Chauffeur_Driven_Airport','Standard','1','no',1,'Black','2020',50000,13000,100,100,'Active'),(2,16,'Chauffeur_Driven_Airport','Standard','7','no',1,'Black','2020',50000,11350,100,100,'Active'),(3,12,'Chauffeur_Driven_Airport','Luxury','1','no',1,'Black','2020',50000,11350,100,100,'Active'),(4,12,'Chauffeur_Driven_Airport','Luxury','7','no',1,'Black','2020',50000,11350,100,100,'Active'),(5,1,'Chauffeur_Driven_Airport','Luxury','1','no',0,'Black','2020',50000,11350,100,100,'Active'),(6,1,'Chauffeur_Driven_Airport','Luxury','7','no',1,'Black','2020',50000,11350,100,100,'Active'),(7,35,'Chauffeur_Driven_Airport','Standard','1','no',1,'Black','2020',50000,7720,100,100,'Active'),(8,35,'Chauffeur_Driven_Airport','Standard','7','no',1,'Black','2020',50000,8600,100,100,'Active'),(9,12,'Chauffeur_Driven_Airport','Luxury','4','no',1,'Black','2020',50000,11350,100,100,'Active'),(10,1,'Chauffeur_Driven_Airport','Standard','3','no',0,'','',0,150000,100,100,'Active'),(11,1,'Chauffeur_Driven_Airport','Standard','4','no',1,'','',0,10500,100,100,'Active'),(12,12,'Chauffeur_Driven_Airport','Luxury','9','no',1,'Black','2020',50000,11900,100,100,'Active'),(13,1,'Chauffeur_Driven_Airport','Luxury','6','no',1,'','',0,10500,100,100,'Active'),(14,1,'Chauffeur_Driven_Airport','Luxury','2','no',0,'','',0,11000,100,100,'Active'),(15,1,'Chauffeur_Driven_Airport','Luxury','8','no',0,'','',0,12000,100,100,'Active'),(16,1,'Chauffeur_Driven_Airport','Luxury','9','no',0,'','',0,11900,100,100,'Active'),(17,55,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,19600,100,100,'Active'),(18,11,'Chauffeur_Driven_Airport','Luxury','5','no',1,'','',0,2400,100,100,'Active'),(19,10,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,15200,100,100,'Active'),(20,59,'Chauffeur_Driven_Airport','Luxury','5','no',1,'','',0,9700,100,100,'Active'),(21,16,'Chauffeur_Driven_Airport','Standard','4','no',1,'Black','2020',50000,11350,100,100,'Active'),(22,16,'Chauffeur_Driven_Airport','Standard','6','no',1,'Black','2020',50000,13000,100,100,'Active'),(23,16,'Chauffeur_Driven_Airport','Standard','2','no',1,'Black','2020',50000,13000,100,100,'Active'),(24,16,'Chauffeur_Driven_Airport','Standard','9','no',1,'Black','2020',50000,13550,100,100,'Active'),(25,55,'Chauffeur_Driven_Airport','Luxury','6','no',0,'','',0,27300,100,100,'Active'),(26,17,'Chauffeur_Driven_Airport','Standard','7','no',1,'Black','2020',50000,21800,100,100,'Active'),(27,55,'Chauffeur_Driven_Airport','Standard','9','no',0,'','',0,15200,100,100,'Active'),(28,18,'Chauffeur_Driven_Airport','Standard','4','no',1,'Black','2020',50000,12450,100,100,'Active'),(29,35,'Chauffeur_Driven_Airport','Standard','4','no',1,'Black','2020',50000,5850,100,100,'Active'),(30,35,'Chauffeur_Driven_Airport','Standard','9','no',1,'Black','2020',50000,9150,100,100,'Active'),(31,43,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,15200,100,100,'Active'),(32,54,'Chauffeur_Driven_Airport','Luxury','7','yes',0,'','',0,0,100,100,'Active'),(33,22,'Chauffeur_Driven_Airport','Luxury','9','no',1,'Black','2020',50000,9700,100,100,'Active'),(34,22,'Chauffeur_Driven_Airport','Luxury','10','no',1,'Black','2020',50000,16500,100,100,'Active'),(35,24,'Chauffeur_Driven_Airport','Luxury','4','no',1,'Black','2020',50000,12450,100,100,'Active'),(36,32,'Chauffeur_Driven_Airport','Luxury','2','yes',0,'','',0,0,100,100,'Active'),(37,24,'Chauffeur_Driven_Airport','Luxury','7','no',1,'Black','2020',50000,19600,100,100,'Active'),(38,25,'Chauffeur_Driven_Airport','Luxury','1','no',1,'Black','2020',50000,19600,100,100,'Active'),(39,25,'Chauffeur_Driven_Airport','Luxury','4','no',1,'Black','2020',50000,16300,100,100,'Active'),(40,25,'Chauffeur_Driven_Airport','Luxury','7','no',1,'Black','2020',50000,24000,100,100,'Active'),(41,26,'Chauffeur_Driven_Airport','Luxury','1','no',1,'Black','2020',50000,24000,100,100,'Active'),(42,27,'Chauffeur_Driven_Airport','Luxury','1','no',1,'Black','2020',50000,35000,100,100,'Active'),(43,38,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,15200,100,100,'Active'),(44,37,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,9700,100,100,'Active'),(45,40,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,19600,100,100,'Active'),(46,40,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,19600,100,100,'Active'),(47,4,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,21800,100,100,'Active'),(48,3,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,27300,100,100,'Active'),(49,57,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,32800,100,100,'Active'),(50,58,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,30600,100,100,'Active'),(51,2,'Chauffeur_Driven_Airport','Luxury','3','no',0,'','',0,18080,100,100,'Active'),(52,52,'Chauffeur_Driven_Airport','Standard','1','no',1,'Black','2020',50000,3460,100,100,'Active'),(53,2,'Chauffeur_Driven_Airport','Luxury','4','no',0,'','',0,11350,100,100,'Active'),(54,52,'Chauffeur_Driven_Airport','Standard','3','no',1,'Black','2020',50000,5021,100,100,'Active'),(55,52,'Chauffeur_Driven_Airport','Standard','4','no',1,'Black','2020',50000,3460,100,100,'Active'),(56,7,'Chauffeur_Driven_Airport','Luxury','4','no',0,'','',0,12450,100,100,'Active'),(57,52,'Chauffeur_Driven_Airport','Standard','5','no',1,'Black','2020',50000,3870,100,100,'Active'),(58,3,'Chauffeur_Driven_Airport','Luxury','4','no',0,'','',0,19600,100,100,'Active'),(59,52,'Chauffeur_Driven_Airport','Standard','6','no',1,'Black','2020',50000,4200,100,100,'Active'),(60,52,'Chauffeur_Driven_Airport','Standard','7','no',1,'Black','2020',50000,3650,100,100,'Active'),(61,52,'Chauffeur_Driven_Airport','Standard','2','no',1,'Black','2020',50000,3870,100,100,'Active'),(62,52,'Chauffeur_Driven_Airport','Standard','8','no',1,'Black','2020',50000,3650,100,100,'Active'),(63,2,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,15200,100,100,'Active'),(64,52,'Chauffeur_Driven_Airport','Standard','9','no',1,'Black','2020',50000,3760,100,100,'Active'),(65,5,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,18500,100,100,'Active'),(66,3,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,19600,100,100,'Active'),(67,52,'Chauffeur_Driven_Airport','Standard','11','no',1,'Black','2020',50000,4180,100,100,'Active'),(68,2,'Chauffeur_Driven_Airport','Luxury','6','no',0,'','',0,11350,100,100,'Active'),(69,52,'Chauffeur_Driven_Airport','Standard','10','no',1,'Black','2020',50000,3550,100,100,'Active'),(70,64,'Chauffeur_Driven_Airport','Luxury','6','no',0,'','',0,11350,100,100,'Active'),(71,63,'Chauffeur_Driven_Airport','Luxury','6','no',0,'','',0,19600,100,100,'Active'),(72,2,'Chauffeur_Driven_Airport','Luxury','7','no',1,'','',0,11350,100,100,'Active'),(73,7,'Chauffeur_Driven_Airport','Luxury','7','no',0,'','',0,21800,100,100,'Active'),(74,3,'Chauffeur_Driven_Airport','Luxury','6','no',0,'','',0,2400,100,100,'Active'),(75,2,'Chauffeur_Driven_Airport','Luxury','2','no',0,'','',0,11900,100,100,'Active'),(76,2,'Chauffeur_Driven_Airport','Luxury','8','no',0,'','',0,13000,100,100,'Active'),(77,2,'Chauffeur_Driven_Airport','Luxury','9','no',0,'','',0,11900,100,100,'Active'),(78,65,'Chauffeur_Driven_Airport','Luxury','9','no',0,'','',0,9700,100,100,'Active'),(79,64,'Chauffeur_Driven_Airport','Luxury','10','no',0,'','',0,16500,100,100,'Active'),(80,34,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,2880,100,100,'Active'),(81,51,'Chauffeur_Driven_Airport','Standard','1','no',1,'Black','2020',50000,6489,100,100,'Active'),(82,51,'Chauffeur_Driven_Airport','Standard','3','no',1,'Black','2020',50000,13152,100,100,'Active'),(83,51,'Chauffeur_Driven_Airport','Standard','4','no',1,'Black','2020',50000,5850,100,100,'Active'),(84,51,'Chauffeur_Driven_Airport','Standard','5','no',1,'Black','2020',50000,8050,100,100,'Active'),(85,34,'Chauffeur_Driven_Airport','Luxury','4','no',0,'','',0,2880,100,100,'Active'),(86,34,'Chauffeur_Driven_Airport','Luxury','7','no',0,'','',0,3100,100,100,'Active'),(87,51,'Chauffeur_Driven_Airport','Standard','6','no',1,'Black','2020',50000,9150,100,100,'Active'),(88,51,'Chauffeur_Driven_Airport','Standard','7','no',1,'Black','2020',50000,8050,100,100,'Active'),(89,42,'Chauffeur_Driven_Airport','Luxury','4','no',0,'','',0,10800,100,100,'Active'),(90,51,'Chauffeur_Driven_Airport','Standard','2','no',1,'Black','2020',50000,6400,100,100,'Active'),(91,51,'Chauffeur_Driven_Airport','Standard','8','no',1,'Black','2020',50000,8050,100,100,'Active'),(92,42,'Chauffeur_Driven_Airport','Luxury','5','no',0,'','',0,19600,100,100,'Active'),(93,51,'Chauffeur_Driven_Airport','Standard','9','no',1,'Black','2020',50000,9150,100,100,'Active'),(94,51,'Chauffeur_Driven_Airport','Standard','10','no',1,'Black','2020',50000,7700,100,100,'Active'),(95,51,'Chauffeur_Driven_Airport','Standard','11','no',1,'Black','2020',50000,7700,100,100,'Active'),(96,13,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,76800,100,100,'Active'),(97,50,'Chauffeur_Driven_Airport','Standard','1','no',1,'Black','2020',50000,16300,100,100,'Active'),(98,50,'Chauffeur_Driven_Airport','Standard','5','no',1,'Black','2020',50000,13550,100,100,'Active'),(99,49,'Chauffeur_Driven_Airport','Standard','1','no',1,'Black','2020',50000,4750,100,100,'Active'),(100,49,'Chauffeur_Driven_Airport','Standard','4','no',1,'Black','2020',50000,3485,100,100,'Active'),(101,49,'Chauffeur_Driven_Airport','Standard','5','no',1,'Black','2020',50000,4200,100,100,'Active'),(102,49,'Chauffeur_Driven_Airport','Standard','7','no',1,'Black','2020',50000,3485,100,100,'Active'),(103,49,'Chauffeur_Driven_Airport','Standard','9','no',1,'Black','2020',50000,4750,100,100,'Active'),(104,49,'Chauffeur_Driven_Airport','Standard','10','no',1,'Black','2020',50000,5500,100,100,'Active'),(105,13,'Chauffeur_Driven_Airport','Super Car','4','yes',0,'','',0,0,0,0,'Active'),(106,13,'Chauffeur_Driven_Airport','Super Car','7','yes',0,'','',0,0,100,100,'Active'),(107,19,'Chauffeur_Driven_Airport','Standard','1','no',1,'Black','2020',50000,8600,100,100,'Active'),(108,19,'Chauffeur_Driven_Airport','Standard','3','no',1,'Black','2020',50000,10688,100,100,'Active'),(109,8,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,19600,100,100,'Active'),(110,19,'Chauffeur_Driven_Airport','Standard','7','no',1,'Black','2020',50000,8050,100,100,'Active'),(111,19,'Chauffeur_Driven_Airport','Standard','2','no',1,'Black','2020',50000,6400,100,100,'Active'),(112,19,'Chauffeur_Driven_Airport','Standard','2','no',1,'Black','2020',50000,6400,100,100,'Active'),(113,19,'Chauffeur_Driven_Airport','Standard','9','no',1,'Black','2020',50000,9150,100,100,'Active'),(114,8,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,26704,100,100,'Active'),(115,8,'Chauffeur_Driven_Airport','Luxury','4','no',0,'','',0,19600,100,100,'Active'),(116,48,'Chauffeur_Driven_Airport','Standard','9','no',1,'Black','2020',50000,20700,100,100,'Active'),(117,47,'Chauffeur_Driven_Airport','Standard','1','no',1,'Black','2020',50000,32800,100,100,'Active'),(118,8,'Chauffeur_Driven_Airport','Luxury','1','no',0,'','',0,21800,100,100,'Active'),(119,8,'Chauffeur_Driven_Airport','Luxury','8','no',0,'','',0,19600,100,100,'Active'),(120,8,'Chauffeur_Driven_Airport','Luxury','9','no',0,'','',0,22900,100,100,'Active');
/*!40000 ALTER TABLE `chauffeur_driven_airport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chauffeur_driven_outstation`
--

DROP TABLE IF EXISTS `chauffeur_driven_outstation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chauffeur_driven_outstation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_id` int NOT NULL,
  `car_type` enum('Chauffeur_Driven_OutStation') NOT NULL,
  `car_style` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `forPrime` enum('yes','no') NOT NULL,
  `agent` int NOT NULL,
  `color` varchar(100) NOT NULL,
  `launch` varchar(100) NOT NULL,
  `deposit` int DEFAULT NULL,
  `price` int NOT NULL,
  `package_hours` int NOT NULL,
  `extra_kms` int NOT NULL,
  `status` enum('Active','Inactive') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chauffeur_driven_outstation`
--

LOCK TABLES `chauffeur_driven_outstation` WRITE;
/*!40000 ALTER TABLE `chauffeur_driven_outstation` DISABLE KEYS */;
INSERT INTO `chauffeur_driven_outstation` VALUES (1,16,'Chauffeur_Driven_OutStation','Standard','1','no',1,'Black','2020',50000,30800,24,300,'Active'),(2,16,'Chauffeur_Driven_OutStation','Standard','7','no',1,'Black','2020',50000,25575,24,300,'Active'),(3,12,'Chauffeur_Driven_OutStation','Luxury','1','no',1,'Black','2020',50000,30360,24,300,'Active'),(4,12,'Chauffeur_Driven_OutStation','Luxury','7','no',1,'Black','2020',50000,25575,24,300,'Active'),(5,1,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'Black','2020',50000,34100,24,300,'Active'),(6,1,'Chauffeur_Driven_OutStation','Luxury','7','no',1,'Black','2020',50000,25575,24,300,'Active'),(7,35,'Chauffeur_Driven_OutStation','Standard','1','no',1,'Black','2020',50000,23100,24,300,'Active'),(8,35,'Chauffeur_Driven_OutStation','Standard','7','no',1,'Black','2020',50000,18260,24,300,'Active'),(9,12,'Chauffeur_Driven_OutStation','Luxury','4','no',1,'Black','2020',50000,25575,24,300,'Active'),(10,1,'Chauffeur_Driven_OutStation','Standard','3','no',0,'','',0,36900,24,300,'Active'),(11,1,'Chauffeur_Driven_OutStation','Standard','4','no',1,'','',0,23250,24,300,'Active'),(12,12,'Chauffeur_Driven_OutStation','Luxury','9','no',1,'Black','2020',50000,35200,24,300,'Active'),(13,1,'Chauffeur_Driven_OutStation','Luxury','6','no',1,'','',0,31000,24,300,'Active'),(14,1,'Chauffeur_Driven_OutStation','Luxury','2','no',0,'','',0,31000,24,300,'Active'),(15,1,'Chauffeur_Driven_OutStation','Luxury','8','no',0,'','',0,34000,24,300,'Active'),(16,1,'Chauffeur_Driven_OutStation','Luxury','9','no',0,'','',0,35200,24,300,'Active'),(17,55,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,60500,24,300,'Active'),(18,11,'Chauffeur_Driven_OutStation','Luxury','5','no',1,'','',0,58850,24,300,'Active'),(19,10,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,41888,24,300,'Active'),(20,59,'Chauffeur_Driven_OutStation','Luxury','5','no',1,'','',0,34496,24,300,'Active'),(21,16,'Chauffeur_Driven_OutStation','Standard','4','no',1,'Black','2020',50000,25575,24,300,'Active'),(22,16,'Chauffeur_Driven_OutStation','Standard','6','no',1,'Black','2020',50000,40700,24,300,'Active'),(23,16,'Chauffeur_Driven_OutStation','Standard','2','no',1,'Black','2020',50000,35200,24,300,'Active'),(24,16,'Chauffeur_Driven_OutStation','Standard','9','no',1,'Black','2020',50000,40700,24,300,'Active'),(25,55,'Chauffeur_Driven_OutStation','Luxury','6','no',0,'','',0,0,24,300,'Active'),(26,17,'Chauffeur_Driven_OutStation','Standard','7','no',1,'Black','2020',50000,37950,24,300,'Active'),(27,55,'Chauffeur_Driven_OutStation','Standard','9','no',0,'','',0,40700,24,300,'Active'),(28,18,'Chauffeur_Driven_OutStation','Standard','4','no',1,'Black','2020',50000,37950,24,300,'Active'),(29,35,'Chauffeur_Driven_OutStation','Standard','4','no',1,'Black','2020',50000,18260,24,300,'Active'),(30,35,'Chauffeur_Driven_OutStation','Standard','9','no',1,'Black','2020',50000,27500,24,300,'Active'),(31,43,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,41888,24,300,'Active'),(32,22,'Chauffeur_Driven_OutStation','Luxury','9','no',1,'Black','2020',50000,27500,24,300,'Active'),(33,22,'Chauffeur_Driven_OutStation','Luxury','10','no',1,'Black','2020',50000,33000,24,300,'Active'),(34,24,'Chauffeur_Driven_OutStation','Luxury','4','no',1,'Black','2020',50000,37950,24,300,'Active'),(35,32,'Chauffeur_Driven_OutStation','Luxury','2','yes',0,'','',0,0,24,300,'Active'),(36,24,'Chauffeur_Driven_OutStation','Luxury','7','no',1,'Black','2020',50000,37950,24,300,'Active'),(37,25,'Chauffeur_Driven_OutStation','Luxury','1','no',1,'Black','2020',50000,60500,24,300,'Active'),(38,25,'Chauffeur_Driven_OutStation','Luxury','4','no',1,'Black','2020',50000,51150,24,300,'Active'),(39,25,'Chauffeur_Driven_OutStation','Luxury','7','no',1,'Black','2020',50000,51150,24,300,'Active'),(40,26,'Chauffeur_Driven_OutStation','Luxury','1','no',1,'Black','2020',50000,73700,24,300,'Active'),(41,27,'Chauffeur_Driven_OutStation','Luxury','1','no',1,'Black','2020',50000,106700,24,300,'Active'),(42,38,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,41888,24,300,'Active'),(43,37,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,28952,24,300,'Active'),(44,40,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,47432,24,300,'Active'),(45,40,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,47432,24,300,'Active'),(46,4,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,60500,24,300,'Active'),(47,3,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,60500,24,300,'Active'),(48,57,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,100100,24,300,'Active'),(49,58,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,93500,24,300,'Active'),(50,2,'Chauffeur_Driven_OutStation','Luxury','3','no',0,'','',0,40590,24,300,'Active'),(51,52,'Chauffeur_Driven_OutStation','Standard','1','no',1,'Black','2020',50000,8855,24,300,'Active'),(52,2,'Chauffeur_Driven_OutStation','Luxury','4','no',0,'','',0,25575,24,300,'Active'),(53,52,'Chauffeur_Driven_OutStation','Standard','3','no',1,'Black','2020',50000,8855,24,300,'Active'),(54,52,'Chauffeur_Driven_OutStation','Standard','4','no',1,'Black','2020',50000,9955,24,300,'Active'),(55,7,'Chauffeur_Driven_OutStation','Luxury','4','no',0,'','',0,37950,24,300,'Active'),(56,52,'Chauffeur_Driven_OutStation','Standard','5','no',1,'Black','2020',50000,12074,24,300,'Active'),(57,3,'Chauffeur_Driven_OutStation','Luxury','4','no',0,'','',0,51150,24,300,'Active'),(58,52,'Chauffeur_Driven_OutStation','Standard','6','no',1,'Black','2020',50000,10450,24,300,'Active'),(59,52,'Chauffeur_Driven_OutStation','Standard','7','no',1,'Black','2020',50000,9955,24,300,'Active'),(60,52,'Chauffeur_Driven_OutStation','Standard','2','no',1,'Black','2020',50000,8855,24,300,'Active'),(61,52,'Chauffeur_Driven_OutStation','Standard','8','no',1,'Black','2020',50000,10560,24,300,'Active'),(62,2,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,41888,24,300,'Active'),(63,52,'Chauffeur_Driven_OutStation','Standard','9','no',1,'Black','2020',50000,11550,24,300,'Active'),(64,5,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,47432,24,300,'Active'),(65,3,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,47432,24,300,'Active'),(66,52,'Chauffeur_Driven_OutStation','Standard','11','no',1,'Black','2020',50000,8800,24,300,'Active'),(67,2,'Chauffeur_Driven_OutStation','Luxury','6','no',0,'','',0,34100,24,300,'Active'),(68,52,'Chauffeur_Driven_OutStation','Standard','10','no',1,'Black','2020',50000,8855,24,300,'Active'),(69,64,'Chauffeur_Driven_OutStation','Luxury','6','no',0,'','',0,34100,24,300,'Active'),(70,63,'Chauffeur_Driven_OutStation','Luxury','6','no',0,'','',0,61050,24,300,'Active'),(71,2,'Chauffeur_Driven_OutStation','Luxury','7','no',1,'','',0,27575,24,300,'Active'),(72,7,'Chauffeur_Driven_OutStation','Luxury','7','no',0,'','',0,37950,24,300,'Active'),(73,3,'Chauffeur_Driven_OutStation','Luxury','6','no',0,'','',0,51150,24,300,'Active'),(74,2,'Chauffeur_Driven_OutStation','Luxury','2','no',0,'','',0,34100,24,300,'Active'),(75,2,'Chauffeur_Driven_OutStation','Luxury','8','no',0,'','',0,37400,24,300,'Active'),(76,2,'Chauffeur_Driven_OutStation','Luxury','9','no',0,'','',0,35200,24,300,'Active'),(77,65,'Chauffeur_Driven_OutStation','Luxury','9','no',0,'','',0,27500,24,300,'Active'),(78,64,'Chauffeur_Driven_OutStation','Luxury','10','no',0,'','',0,33000,24,300,'Active'),(79,34,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,8140,24,300,'Active'),(80,51,'Chauffeur_Driven_OutStation','Standard','1','no',1,'Black','2020',50000,23100,24,300,'Active'),(81,51,'Chauffeur_Driven_OutStation','Standard','3','no',1,'Black','2020',50000,30690,24,300,'Active'),(82,51,'Chauffeur_Driven_OutStation','Standard','4','no',1,'Black','2020',50000,18260,24,300,'Active'),(83,51,'Chauffeur_Driven_OutStation','Standard','5','no',1,'Black','2020',50000,28952,24,300,'Active'),(84,34,'Chauffeur_Driven_OutStation','Luxury','4','no',0,'','',0,9790,24,300,'Active'),(85,34,'Chauffeur_Driven_OutStation','Luxury','7','no',0,'','',0,9790,24,300,'Active'),(86,51,'Chauffeur_Driven_OutStation','Standard','6','no',1,'Black','2020',50000,17600,24,300,'Active'),(87,51,'Chauffeur_Driven_OutStation','Standard','7','no',1,'Black','2020',50000,18260,24,300,'Active'),(88,42,'Chauffeur_Driven_OutStation','Luxury','4','no',0,'','',0,33000,24,300,'Active'),(89,51,'Chauffeur_Driven_OutStation','Standard','2','no',1,'Black','2020',50000,23100,24,300,'Active'),(90,51,'Chauffeur_Driven_OutStation','Standard','8','no',1,'Black','2020',50000,24750,24,300,'Active'),(91,42,'Chauffeur_Driven_OutStation','Luxury','5','no',0,'','',0,47432,24,300,'Active'),(92,51,'Chauffeur_Driven_OutStation','Standard','9','no',1,'Black','2020',50000,27500,24,300,'Active'),(93,51,'Chauffeur_Driven_OutStation','Standard','10','no',1,'Black','2020',50000,24200,24,300,'Active'),(94,51,'Chauffeur_Driven_OutStation','Standard','11','no',1,'Black','2020',50000,17600,24,300,'Active'),(95,13,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,200200,24,300,'Active'),(96,50,'Chauffeur_Driven_OutStation','Standard','1','no',1,'Black','2020',50000,34100,24,300,'Active'),(97,50,'Chauffeur_Driven_OutStation','Standard','5','no',1,'Black','2020',50000,30800,24,300,'Active'),(98,49,'Chauffeur_Driven_OutStation','Standard','1','no',1,'Black','2020',50000,13200,24,300,'Active'),(99,49,'Chauffeur_Driven_OutStation','Standard','4','no',1,'Black','2020',50000,11110,24,300,'Active'),(100,49,'Chauffeur_Driven_OutStation','Standard','5','no',1,'Black','2020',50000,15400,24,300,'Active'),(101,49,'Chauffeur_Driven_OutStation','Standard','7','no',1,'Black','2020',50000,11110,24,300,'Active'),(102,49,'Chauffeur_Driven_OutStation','Standard','9','no',1,'Black','2020',50000,11550,24,300,'Active'),(103,49,'Chauffeur_Driven_OutStation','Standard','10','no',1,'Black','2020',50000,11550,24,300,'Active'),(104,19,'Chauffeur_Driven_OutStation','Standard','1','no',1,'Black','2020',50000,24200,24,300,'Active'),(105,19,'Chauffeur_Driven_OutStation','Standard','3','no',1,'Black','2020',50000,24090,24,300,'Active'),(106,8,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,67650,24,300,'Active'),(107,19,'Chauffeur_Driven_OutStation','Standard','7','no',1,'Black','2020',50000,19250,24,300,'Active'),(108,19,'Chauffeur_Driven_OutStation','Standard','2','no',1,'Black','2020',50000,19250,24,300,'Active'),(109,19,'Chauffeur_Driven_OutStation','Standard','2','no',1,'Black','2020',50000,19250,24,300,'Active'),(110,19,'Chauffeur_Driven_OutStation','Standard','9','no',1,'Black','2020',50000,27500,24,300,'Active'),(111,8,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,53900,24,300,'Active'),(112,8,'Chauffeur_Driven_OutStation','Luxury','4','no',0,'','',0,56100,24,300,'Active'),(113,48,'Chauffeur_Driven_OutStation','Standard','9','no',1,'Black','2020',50000,66000,24,300,'Active'),(114,47,'Chauffeur_Driven_OutStation','Standard','1','no',1,'Black','2020',50000,100100,24,300,'Active'),(115,8,'Chauffeur_Driven_OutStation','Luxury','1','no',0,'','',0,56100,24,300,'Active'),(116,8,'Chauffeur_Driven_OutStation','Luxury','8','no',0,'','',0,60500,24,300,'Active'),(117,8,'Chauffeur_Driven_OutStation','Luxury','9','no',0,'','',0,67100,24,300,'Active');
/*!40000 ALTER TABLE `chauffeur_driven_outstation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chauffeur_driven_standard`
--

DROP TABLE IF EXISTS `chauffeur_driven_standard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chauffeur_driven_standard` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_id` int NOT NULL,
  `car_type` enum('Chauffeur_Driven_Standard') NOT NULL,
  `car_style` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `forPrime` enum('yes','no') NOT NULL,
  `agent` int NOT NULL,
  `color` varchar(100) NOT NULL,
  `launch` varchar(100) NOT NULL,
  `deposit` int DEFAULT NULL,
  `price` int NOT NULL,
  `package_hours` int NOT NULL,
  `extra_kms` int NOT NULL,
  `status` enum('Active','Inactive') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chauffeur_driven_standard`
--

LOCK TABLES `chauffeur_driven_standard` WRITE;
/*!40000 ALTER TABLE `chauffeur_driven_standard` DISABLE KEYS */;
INSERT INTO `chauffeur_driven_standard` VALUES (1,16,'Chauffeur_Driven_Standard','Standard','1','no',1,'Black','2020',50000,13200,8,80,'Active'),(2,16,'Chauffeur_Driven_Standard','Standard','7','no',1,'Black','2020',50000,11550,8,80,'Active'),(3,12,'Chauffeur_Driven_Standard','Luxury','1','no',1,'Black','2020',50000,11550,8,80,'Active'),(4,12,'Chauffeur_Driven_Standard','Luxury','7','no',1,'Black','2020',50000,11550,8,80,'Active'),(5,1,'Chauffeur_Driven_Standard','Luxury','1','no',0,'Black','2020',50000,11550,8,80,'Active'),(6,1,'Chauffeur_Driven_Standard','Luxury','7','no',1,'Black','2020',50000,11550,8,80,'Active'),(7,35,'Chauffeur_Driven_Standard','Standard','1','no',1,'Black','2020',50000,7920,8,80,'Active'),(8,35,'Chauffeur_Driven_Standard','Standard','7','no',1,'Black','2020',50000,8800,8,80,'Active'),(9,12,'Chauffeur_Driven_Standard','Luxury','4','no',1,'Black','2020',50000,11550,8,80,'Active'),(10,1,'Chauffeur_Driven_Standard','Standard','3','no',0,'','',0,15000,8,80,'Active'),(11,1,'Chauffeur_Driven_Standard','Standard','4','no',1,'','',0,10500,8,80,'Active'),(12,12,'Chauffeur_Driven_Standard','Luxury','9','no',1,'Black','2020',50000,12100,8,80,'Active'),(13,1,'Chauffeur_Driven_Standard','Luxury','6','no',1,'','',0,10500,8,80,'Active'),(14,1,'Chauffeur_Driven_Standard','Luxury','2','no',0,'','',0,11000,8,80,'Active'),(15,1,'Chauffeur_Driven_Standard','Luxury','8','no',0,'','',0,12000,8,80,'Active'),(16,1,'Chauffeur_Driven_Standard','Luxury','9','no',0,'','',0,12100,8,80,'Active'),(17,55,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,19800,8,80,'Active'),(18,11,'Chauffeur_Driven_Standard','Luxury','5','no',1,'','',0,24200,8,80,'Active'),(19,10,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,15400,8,80,'Active'),(20,59,'Chauffeur_Driven_Standard','Luxury','5','no',1,'','',0,9900,8,80,'Active'),(21,16,'Chauffeur_Driven_Standard','Standard','4','no',1,'Black','2020',50000,11550,8,80,'Active'),(22,16,'Chauffeur_Driven_Standard','Standard','6','no',1,'Black','2020',50000,13200,8,80,'Active'),(23,16,'Chauffeur_Driven_Standard','Standard','2','no',1,'Black','2020',50000,13200,8,80,'Active'),(24,16,'Chauffeur_Driven_Standard','Standard','9','no',1,'Black','2020',50000,13750,8,80,'Active'),(25,55,'Chauffeur_Driven_Standard','Luxury','6','no',0,'','',0,27500,8,80,'Active'),(26,17,'Chauffeur_Driven_Standard','Standard','7','no',1,'Black','2020',50000,22000,8,80,'Active'),(27,55,'Chauffeur_Driven_Standard','Standard','9','no',0,'','',0,15400,8,80,'Active'),(28,18,'Chauffeur_Driven_Standard','Standard','4','no',1,'Black','2020',50000,12650,8,80,'Active'),(29,35,'Chauffeur_Driven_Standard','Standard','4','no',1,'Black','2020',50000,6050,8,80,'Active'),(30,35,'Chauffeur_Driven_Standard','Standard','9','no',1,'Black','2020',50000,9350,8,80,'Active'),(31,43,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,15400,8,80,'Active'),(32,54,'Chauffeur_Driven_Standard','Luxury','7','yes',0,'','',0,0,8,80,'Active'),(33,22,'Chauffeur_Driven_Standard','Luxury','9','no',1,'Black','2020',50000,9900,8,80,'Active'),(34,22,'Chauffeur_Driven_Standard','Luxury','10','no',1,'Black','2020',50000,16500,8,80,'Active'),(35,24,'Chauffeur_Driven_Standard','Luxury','4','no',1,'Black','2020',50000,12650,8,80,'Active'),(36,32,'Chauffeur_Driven_Standard','Luxury','2','yes',0,'','',0,0,8,80,'Active'),(37,24,'Chauffeur_Driven_Standard','Luxury','7','no',1,'Black','2020',50000,19800,8,80,'Active'),(38,32,'Chauffeur_Driven_Standard','Luxury','3','yes',0,'','',0,0,8,80,'Active'),(39,32,'Chauffeur_Driven_Standard','Luxury','4','yes',0,'','',0,0,8,80,'Active'),(40,32,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,0,8,80,'Active'),(41,25,'Chauffeur_Driven_Standard','Luxury','1','no',1,'Black','2020',50000,19800,8,80,'Active'),(42,25,'Chauffeur_Driven_Standard','Luxury','4','no',1,'Black','2020',50000,16500,8,80,'Active'),(43,32,'Chauffeur_Driven_Standard','Luxury','7','yes',0,'','',0,0,8,80,'Active'),(44,25,'Chauffeur_Driven_Standard','Luxury','7','no',1,'Black','2020',50000,24200,8,80,'Active'),(45,26,'Chauffeur_Driven_Standard','Luxury','1','no',1,'Black','2020',50000,24200,8,80,'Active'),(46,27,'Chauffeur_Driven_Standard','Luxury','1','no',1,'Black','2020',50000,35200,8,80,'Active'),(47,38,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,15400,8,80,'Active'),(48,37,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,9900,8,80,'Active'),(49,40,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,19800,8,80,'Active'),(50,40,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,19800,8,80,'Active'),(51,4,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,22000,8,80,'Active'),(52,3,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,27500,8,80,'Active'),(53,57,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,33300,8,80,'Active'),(54,58,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,30800,8,80,'Active'),(55,2,'Chauffeur_Driven_Standard','Luxury','3','no',0,'','',0,16500,8,80,'Active'),(56,52,'Chauffeur_Driven_Standard','Standard','1','no',1,'Black','2020',50000,3660,8,80,'Active'),(57,2,'Chauffeur_Driven_Standard','Luxury','4','no',0,'','',0,11550,8,80,'Active'),(58,52,'Chauffeur_Driven_Standard','Standard','3','no',1,'Black','2020',50000,4070,8,80,'Active'),(59,52,'Chauffeur_Driven_Standard','Standard','4','no',1,'Black','2020',50000,3660,8,80,'Active'),(60,7,'Chauffeur_Driven_Standard','Luxury','4','no',0,'','',0,12650,8,80,'Active'),(61,52,'Chauffeur_Driven_Standard','Standard','5','no',1,'Black','2020',50000,4070,8,80,'Active'),(62,3,'Chauffeur_Driven_Standard','Luxury','4','no',0,'','',0,19800,8,80,'Active'),(63,52,'Chauffeur_Driven_Standard','Standard','6','no',1,'Black','2020',50000,4400,8,80,'Active'),(64,52,'Chauffeur_Driven_Standard','Standard','7','no',1,'Black','2020',50000,3850,8,80,'Active'),(65,52,'Chauffeur_Driven_Standard','Standard','2','no',1,'Black','2020',50000,4070,8,80,'Active'),(66,52,'Chauffeur_Driven_Standard','Standard','8','no',1,'Black','2020',50000,3850,8,80,'Active'),(67,2,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,15400,8,80,'Active'),(68,52,'Chauffeur_Driven_Standard','Standard','9','no',1,'Black','2020',50000,3960,8,80,'Active'),(69,5,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,18700,8,80,'Active'),(70,3,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,19800,8,80,'Active'),(71,52,'Chauffeur_Driven_Standard','Standard','11','no',1,'Black','2020',50000,4180,8,80,'Active'),(72,2,'Chauffeur_Driven_Standard','Luxury','6','no',0,'','',0,11500,8,80,'Active'),(73,64,'Chauffeur_Driven_Standard','Luxury','6','no',0,'','',0,11500,8,80,'Active'),(74,63,'Chauffeur_Driven_Standard','Luxury','6','no',0,'','',0,19800,8,80,'Active'),(75,2,'Chauffeur_Driven_Standard','Luxury','7','no',1,'','',0,11550,8,80,'Active'),(76,7,'Chauffeur_Driven_Standard','Luxury','7','no',0,'','',0,22000,8,80,'Active'),(77,3,'Chauffeur_Driven_Standard','Luxury','6','no',0,'','',0,24200,8,80,'Active'),(78,2,'Chauffeur_Driven_Standard','Luxury','2','no',0,'','',0,12100,8,80,'Active'),(79,2,'Chauffeur_Driven_Standard','Luxury','8','no',0,'','',0,13200,8,80,'Active'),(80,2,'Chauffeur_Driven_Standard','Luxury','9','no',0,'','',0,12100,8,80,'Active'),(81,65,'Chauffeur_Driven_Standard','Luxury','9','no',0,'','',0,9900,8,80,'Active'),(82,64,'Chauffeur_Driven_Standard','Luxury','10','no',0,'','',0,16500,8,80,'Active'),(83,34,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,3080,8,80,'Active'),(84,51,'Chauffeur_Driven_Standard','Standard','1','no',1,'Black','2020',50000,6689,8,80,'Active'),(85,51,'Chauffeur_Driven_Standard','Standard','3','no',1,'Black','2020',50000,12100,8,80,'Active'),(86,51,'Chauffeur_Driven_Standard','Standard','4','no',1,'Black','2020',50000,6050,8,80,'Active'),(87,51,'Chauffeur_Driven_Standard','Standard','5','no',1,'Black','2020',50000,8250,8,80,'Active'),(88,34,'Chauffeur_Driven_Standard','Luxury','4','no',0,'','',0,3080,8,80,'Active'),(89,34,'Chauffeur_Driven_Standard','Luxury','7','no',0,'','',0,3300,8,80,'Active'),(90,51,'Chauffeur_Driven_Standard','Standard','6','no',1,'Black','2020',50000,9350,8,80,'Active'),(91,51,'Chauffeur_Driven_Standard','Standard','7','no',1,'Black','2020',50000,8250,8,80,'Active'),(92,42,'Chauffeur_Driven_Standard','Luxury','4','no',0,'','',0,11000,8,80,'Active'),(93,51,'Chauffeur_Driven_Standard','Standard','2','no',1,'Black','2020',50000,6600,8,80,'Active'),(94,51,'Chauffeur_Driven_Standard','Standard','8','no',1,'Black','2020',50000,8250,8,80,'Active'),(95,42,'Chauffeur_Driven_Standard','Luxury','5','no',0,'','',0,19800,8,80,'Active'),(96,51,'Chauffeur_Driven_Standard','Standard','9','no',1,'Black','2020',50000,9350,8,80,'Active'),(97,51,'Chauffeur_Driven_Standard','Standard','10','no',1,'Black','2020',50000,7700,8,80,'Active'),(98,51,'Chauffeur_Driven_Standard','Standard','11','no',1,'Black','2020',50000,7700,8,80,'Active'),(99,13,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,77000,8,80,'Active'),(100,13,'Chauffeur_Driven_Standard','Luxury','3','yes',0,'','',0,0,8,80,'Active'),(101,50,'Chauffeur_Driven_Standard','Standard','1','no',1,'Black','2020',50000,16500,8,80,'Active'),(102,50,'Chauffeur_Driven_Standard','Standard','5','no',1,'Black','2020',50000,13750,8,80,'Active'),(103,49,'Chauffeur_Driven_Standard','Standard','1','no',1,'Black','2020',50000,4950,8,80,'Active'),(104,49,'Chauffeur_Driven_Standard','Standard','4','no',1,'Black','2020',50000,3685,8,80,'Active'),(105,49,'Chauffeur_Driven_Standard','Standard','5','no',1,'Black','2020',50000,4400,8,80,'Active'),(106,49,'Chauffeur_Driven_Standard','Standard','7','no',1,'Black','2020',50000,3685,8,80,'Active'),(107,49,'Chauffeur_Driven_Standard','Standard','9','no',1,'Black','2020',50000,4950,8,80,'Active'),(108,49,'Chauffeur_Driven_Standard','Standard','10','no',1,'Black','2020',50000,5500,8,80,'Active'),(109,13,'Chauffeur_Driven_Standard','Super Car','4','yes',0,'','',0,0,8,80,'Active'),(110,13,'Chauffeur_Driven_Standard','Super Car','5','yes',0,'','',0,0,8,80,'Active'),(111,13,'Chauffeur_Driven_Standard','Super Car','6','yes',0,'','',0,0,8,80,'Active'),(112,13,'Chauffeur_Driven_Standard','Super Car','7','yes',0,'','',0,0,8,80,'Active'),(113,13,'Chauffeur_Driven_Standard','Super Car','2','yes',1,'','',0,0,8,80,'Active'),(114,13,'Chauffeur_Driven_Standard','Super Car','8','yes',0,'','',0,0,8,80,'Active'),(115,13,'Chauffeur_Driven_Standard','Super Car','9','yes',0,'','',0,0,8,80,'Active'),(116,19,'Chauffeur_Driven_Standard','Standard','1','no',1,'Black','2020',50000,8800,8,80,'Active'),(117,19,'Chauffeur_Driven_Standard','Standard','3','no',1,'Black','2020',50000,9900,8,80,'Active'),(118,8,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,19800,8,80,'Active'),(119,19,'Chauffeur_Driven_Standard','Standard','7','no',1,'Black','2020',50000,8250,8,80,'Active'),(120,19,'Chauffeur_Driven_Standard','Standard','2','no',1,'Black','2020',50000,6600,8,80,'Active'),(121,19,'Chauffeur_Driven_Standard','Standard','2','no',1,'Black','2020',50000,6600,8,80,'Active'),(122,19,'Chauffeur_Driven_Standard','Standard','9','no',1,'Black','2020',50000,9350,8,80,'Active'),(123,8,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,24200,8,80,'Active'),(124,8,'Chauffeur_Driven_Standard','Luxury','4','no',0,'','',0,19800,8,80,'Active'),(125,48,'Chauffeur_Driven_Standard','Standard','9','no',1,'Black','2020',50000,20900,8,80,'Active'),(126,47,'Chauffeur_Driven_Standard','Standard','1','no',1,'Black','2020',50000,33000,8,80,'Active'),(127,8,'Chauffeur_Driven_Standard','Luxury','1','no',0,'','',0,22000,8,80,'Active'),(128,8,'Chauffeur_Driven_Standard','Luxury','8','no',0,'','',0,19800,8,80,'Active'),(129,8,'Chauffeur_Driven_Standard','Luxury','9','no',0,'','',0,23100,8,80,'Active');
/*!40000 ALTER TABLE `chauffeur_driven_standard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `check`
--

DROP TABLE IF EXISTS `check`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `check` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_model` varchar(50) NOT NULL,
  `brand_id` varchar(100) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `brand_id` (`brand_id`),
  UNIQUE KEY `car_model` (`car_model`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `check`
--

LOCK TABLES `check` WRITE;
/*!40000 ALTER TABLE `check` DISABLE KEYS */;
/*!40000 ALTER TABLE `check` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver_detials`
--

DROP TABLE IF EXISTS `driver_detials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_detials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `driver_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `driver_img` varchar(1000) NOT NULL,
  `contact` bigint NOT NULL,
  `alter_contact` bigint NOT NULL,
  `driving_licence_no` varchar(100) NOT NULL,
  `aadhar_no` bigint NOT NULL,
  `pancard_no` varchar(100) NOT NULL,
  `date_of_birth` varchar(100) NOT NULL,
  `driver_loc` varchar(100) NOT NULL,
  `driver_pin` int NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `aadhar_no` (`aadhar_no`),
  UNIQUE KEY `alter_contact` (`alter_contact`),
  UNIQUE KEY `contact` (`contact`),
  UNIQUE KEY `driving_licence_no` (`driving_licence_no`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `pancard_no` (`pancard_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_detials`
--

LOCK TABLES `driver_detials` WRITE;
/*!40000 ALTER TABLE `driver_detials` DISABLE KEYS */;
/*!40000 ALTER TABLE `driver_detials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enquiry`
--

DROP TABLE IF EXISTS `enquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enquiry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `enquiry_title` varchar(400) NOT NULL,
  `enquiry_body` varchar(100) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `enquiry_body` (`enquiry_body`),
  UNIQUE KEY `enquiry_title` (`enquiry_title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enquiry`
--

LOCK TABLES `enquiry` WRITE;
/*!40000 ALTER TABLE `enquiry` DISABLE KEYS */;
/*!40000 ALTER TABLE `enquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feed_back`
--

DROP TABLE IF EXISTS `feed_back`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed_back` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `feedback_body` varchar(600) NOT NULL,
  `rating` varchar(300) NOT NULL,
  `suggestions` varchar(300) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed_back`
--

LOCK TABLES `feed_back` WRITE;
/*!40000 ALTER TABLE `feed_back` DISABLE KEYS */;
/*!40000 ALTER TABLE `feed_back` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personalinfo`
--

DROP TABLE IF EXISTS `personalinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personalinfo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_model` varchar(50) NOT NULL,
  `car_type` enum('chauffeur_Driven','Airport_Pickup/Drop','Self_Drive') NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `phn_num` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `pickup_address` varchar(100) NOT NULL,
  `drop_address` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `instructions` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `car_model` (`car_model`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phn_num` (`phn_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personalinfo`
--

LOCK TABLES `personalinfo` WRITE;
/*!40000 ALTER TABLE `personalinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `personalinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `self_drive`
--

DROP TABLE IF EXISTS `self_drive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `self_drive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_id` int NOT NULL,
  `car_type` enum('Self_Drive') NOT NULL,
  `car_style` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `for_prime` enum('yes','no') NOT NULL,
  `agent` int DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `launch` varchar(100) DEFAULT NULL,
  `deposit` int NOT NULL,
  `price` int NOT NULL,
  `status` enum('Active','Inactive') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `self_drive`
--

LOCK TABLES `self_drive` WRITE;
/*!40000 ALTER TABLE `self_drive` DISABLE KEYS */;
INSERT INTO `self_drive` VALUES (1,1,'Self_Drive','Standard','1','yes',1,'','',50000,22000,'Active'),(2,12,'Self_Drive','Luxury','7','no',1,'Black','2020',50000,17600,'Active'),(3,12,'Self_Drive','Luxury','4','no',1,'Black','2020',50000,17600,'Active'),(4,10,'Self_Drive','Luxury','3','yes',0,'','',50000,0,'Active'),(5,10,'Self_Drive','Luxury','3','yes',0,'','',50000,0,'Active'),(6,11,'Self_Drive','Luxury','4','no',0,'','',50000,33000,'Active'),(7,10,'Self_Drive','Luxury','4','no',1,'','',50000,17600,'Active'),(8,10,'Self_Drive','Luxury','5','no',0,'','',50000,18000,'Active'),(9,10,'Self_Drive','Luxury','5','no',0,'','',50000,49500,'Active'),(10,59,'Self_Drive','Luxury','5','no',0,'','',50000,14850,'Active'),(11,11,'Self_Drive','Luxury','5','no',0,'','',50000,49500,'Active'),(12,10,'Self_Drive','Luxury','6','no',0,'','',50000,13200,'Active'),(13,60,'Self_Drive','Luxury','6','no',0,'','',50000,13200,'Active'),(14,11,'Self_Drive','Luxury','7','no',0,'','',50000,33000,'Active'),(15,10,'Self_Drive','Standard','7','no',0,'','',50000,17600,'Active'),(16,31,'Self_Drive','Luxury','6','no',0,'','',50000,30000,'Active'),(17,30,'Self_Drive','Standard','8','no',0,'','',50000,12000,'Active'),(18,41,'Self_Drive','Luxury','1','yes',0,'','',50000,0,'Active'),(19,41,'Self_Drive','Luxury','7','yes',0,'','',50000,0,'Active'),(20,43,'Self_Drive','Luxury','5','no',0,'','',50000,19800,'Active'),(21,35,'Self_Drive','Standard','4','no',1,'Black','2020',50000,10450,'Active'),(22,54,'Self_Drive','Luxury','7','yes',0,'','',50000,0,'Active'),(23,33,'Self_Drive','Luxury','1','yes',0,'','',50000,0,'Active'),(24,33,'Self_Drive','Luxury','7','yes',0,'','',50000,0,'Active'),(25,32,'Self_Drive','Luxury','1','yes',0,'','',5000,0,'Active'),(26,32,'Self_Drive','Luxury','5','no',0,'','',50000,294810,'Active'),(27,32,'Self_Drive','Luxury','7','yes',0,'','',50000,0,'Active'),(28,25,'Self_Drive','Luxury','1','no',1,'Black','2020',50000,27500,'Active'),(29,25,'Self_Drive','Luxury','4','no',1,'Black','2020',50000,27500,'Active'),(30,25,'Self_Drive','Luxury','8','no',1,'Black','2020',50000,26400,'Active'),(31,40,'Self_Drive','Luxury','1','no',0,'','',50000,27500,'Active'),(32,39,'Self_Drive','Luxury','1','yes',0,'','',50000,16000,'Active'),(33,36,'Self_Drive','Standard','6','no',1,'Black','2020',50000,4950,'Active'),(34,36,'Self_Drive','Standard','10','no',1,'Black','2020',50000,9240,'Active'),(35,37,'Self_Drive','Luxury','5','no',0,'','',50000,11000,'Active'),(36,3,'Self_Drive','Luxury','1','no',0,'','',50000,27500,'Active'),(37,2,'Self_Drive','Luxury','1','no',0,'','',50000,24200,'Active'),(38,3,'Self_Drive','Luxury','3','yes',0,'','',50000,0,'Active'),(39,6,'Self_Drive','Luxury','4','no',0,'','',50000,27500,'Active'),(40,3,'Self_Drive','Luxury','4','no',0,'','',50000,27500,'Active'),(41,7,'Self_Drive','Luxury','4','no',0,'','',50000,22000,'Active'),(42,2,'Self_Drive','Luxury','4','no',0,'','',50000,17600,'Active'),(43,5,'Self_Drive','Luxury','5','no',0,'','',50000,38500,'Active'),(44,56,'Self_Drive','Luxury','5','no',0,'','',50000,20900,'Active'),(45,2,'Self_Drive','Luxury','5','no',0,'','',50000,19800,'Active'),(46,64,'Self_Drive','Luxury','6','no',0,'','',50000,11000,'Active'),(47,65,'Self_Drive','Luxury','6','no',0,'','',50000,14300,'Active'),(48,52,'Self_Drive','Standard','1','no',1,'Black','2020',50000,9900,'Active'),(49,52,'Self_Drive','Standard','3','no',1,'Black','2020',50000,8080,'Active'),(50,52,'Self_Drive','Standard','4','no',1,'Black','2020',50000,7150,'Active'),(51,52,'Self_Drive','Standard','5','no',1,'Black','2020',50000,7700,'Active'),(52,52,'Self_Drive','Standard','6','no',1,'Black','2020',50000,4400,'Active'),(53,52,'Self_Drive','Standard','7','no',1,'Black','2020',50000,7150,'Active'),(54,52,'Self_Drive','Standard','8','no',1,'Black','2020',50000,8250,'Active'),(55,52,'Self_Drive','Standard','10','no',1,'Black','2020',50000,7700,'Active'),(56,2,'Self_Drive','Luxury','7','no',0,'','',50000,17600,'Active'),(57,7,'Self_Drive','Luxury','7','no',0,'','',50000,30800,'Active'),(58,3,'Self_Drive','Luxury','8','no',0,'','',50000,26400,'Active'),(59,51,'Self_Drive','Standard','1','no',1,'Black','2020',50000,13200,'Active'),(60,51,'Self_Drive','Standard','4','no',1,'Black','2020',50000,10450,'Active'),(61,51,'Self_Drive','Standard','5','no',1,'Black','2020',50000,11000,'Active'),(62,51,'Self_Drive','Standard','6','no',1,'Black','2020',50000,7700,'Active'),(63,51,'Self_Drive','Standard','7','no',1,'Black','2020',50000,10450,'Active'),(64,51,'Self_Drive','Standard','8','no',1,'Black','2020',50000,13200,'Active'),(65,8,'Self_Drive','Luxury','1','no',0,'','',50000,38500,'Active'),(66,19,'Self_Drive','Standard','7','no',1,'Black','2020',50000,10450,'Active'),(67,8,'Self_Drive','Luxury','7','no',0,'','',50000,33000,'Active');
/*!40000 ALTER TABLE `self_drive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription` (
  `id` int NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(50) NOT NULL,
  `plan_duration` varchar(100) NOT NULL,
  `allowed_users` enum('Prime','Users') NOT NULL,
  `plan_type` varchar(100) NOT NULL,
  `Amount` int NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `plan_duration` (`plan_duration`),
  UNIQUE KEY `plan_name` (`plan_name`),
  UNIQUE KEY `plan_type` (`plan_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `surge`
--

DROP TABLE IF EXISTS `surge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `surge` (
  `id` int NOT NULL AUTO_INCREMENT,
  `luxury_cd` int NOT NULL,
  `luxury_sd` int NOT NULL,
  `luxury_at` int NOT NULL,
  `standard_cd` int NOT NULL,
  `standard_sd` int NOT NULL,
  `standard_at` int NOT NULL,
  `yatch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `surge`
--

LOCK TABLES `surge` WRITE;
/*!40000 ALTER TABLE `surge` DISABLE KEYS */;
/*!40000 ALTER TABLE `surge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_registration`
--

DROP TABLE IF EXISTS `user_registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` bigint NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `contact` (`contact`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_registration`
--

LOCK TABLES `user_registration` WRITE;
/*!40000 ALTER TABLE `user_registration` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `phone` decimal(10,0) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_type` enum('admin','driver','user') DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `first_name` (`first_name`),
  UNIQUE KEY `last_name` (`last_name`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yatch`
--

DROP TABLE IF EXISTS `yatch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yatch` (
  `id` int NOT NULL AUTO_INCREMENT,
  `yacht_name` varchar(100) NOT NULL,
  `description` varchar(800) NOT NULL,
  `capacity` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `yacht_image` varchar(600) NOT NULL,
  `sailing` int NOT NULL,
  `anchorage` int NOT NULL,
  `time` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yatch`
--

LOCK TABLES `yatch` WRITE;
/*!40000 ALTER TABLE `yatch` DISABLE KEYS */;
/*!40000 ALTER TABLE `yatch` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-09 10:40:03
