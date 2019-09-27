-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2019 at 06:49 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `idCategori` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dateAdded` datetime NOT NULL,
  `dateUpdated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`idCategori`, `name`, `dateAdded`, `dateUpdated`) VALUES
(1, 'Handphone', '2019-09-24 02:05:10', '0000-00-00 00:00:00'),
(2, 'LAPTOP', '2019-09-25 03:17:30', '0000-00-00 00:00:00'),
(3, 'TV', '2019-09-25 00:00:00', '0000-00-00 00:00:00'),
(4, 'KULKAS', '2019-09-25 09:24:26', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `idProduct` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `idCategori` int(11) NOT NULL,
  `price` int(15) NOT NULL,
  `quantity` int(11) NOT NULL,
  `dateAdded` datetime NOT NULL,
  `dateUpdated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`idProduct`, `name`, `description`, `image`, `idCategori`, `price`, `quantity`, `dateAdded`, `dateUpdated`) VALUES
(2, 'VIVO', 'VIVO V15 Plus', '1569571514150-logo1.png', 1, 4100000, 27, '2019-09-24 11:01:00', '2019-09-27 23:22:37'),
(6, 'SAMSUNG', 'SAMSUNG GALAXY NOTE 10 +', '1569598850560-luffy.png', 1, 12000000, 150, '2019-09-24 11:00:00', '2019-09-27 22:40:50'),
(7, 'OPPO', 'OPPO A9 2020', 'oppoA9.jpeg', 1, 4000000, 59, '2019-09-24 14:14:19', '2019-09-27 22:42:20'),
(8, 'OPPO', 'OPPO A5 2020', 'OPPOA5.jpeg', 1, 2500000, 50, '2019-09-25 09:34:24', '2019-09-25 17:50:30'),
(9, 'SAMSUNG', 'SAMSUNG NP275', 'SAM.jpeg', 2, 2500000, 50, '2019-09-25 15:29:00', '2019-09-25 08:22:25'),
(10, 'SAMSUNG', 'SAMSUNG SMART TV N5500', 'samSmart.jpeg', 3, 4500000, 50, '2019-09-25 08:00:00', '2019-09-25 10:39:25'),
(11, 'TOSHIBA', 'TOSHIBA NB520', 'TOSHIBA.jpeg', 3, 2500000, 50, '2019-09-25 08:30:00', '2019-09-25 20:46:25'),
(12, 'VIVO', 'VIVO V15 Plus', '1569509223716-book.jpg', 1, 4100000, 50, '2019-09-26 21:35:44', '2019-09-26 21:47:03');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `email`, `password`) VALUES
(1, 'indrajuniyanto96gmail.com', '$2b$10$2lhvdGuMjpdpimG61AIU/.60XaPmhjHeQNgx3IaDAtkPpojo7dpxm'),
(2, 'BogorCamp@gmail.com', '$2b$10$rmcmodqjZdDs.F.O3ohqmOxBeBYVkn4kDf9A7f4BoJBL6CbwAHEqe'),
(8, 'BootCamp@gmail.com', '$2b$10$oLoytuN78ouoWM9OhXoFeO66v1tNOf0TBfdCr6v4ch/nxbxtQqvOi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idCategori`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProduct`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `idCategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `idProduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
