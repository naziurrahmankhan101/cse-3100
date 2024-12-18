DROP TABLE IF EXISTS `attendances`;
DROP TABLE IF EXISTS `sessions`;

CREATE TABLE sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    duration INT NOT NULL
);

CREATE TABLE `attendances` (
    `id` INT  AUTO_INCREMENT PRIMARY KEY,
    `session_id` INT  NOT NULL,
    `roll` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    FOREIGN KEY (`session_id`) REFERENCES `sessions`(`id`)
);
