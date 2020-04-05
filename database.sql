CREATE TABLE `users` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    `email` VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    `password` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLAT=utf8mb4_unicode_ci;