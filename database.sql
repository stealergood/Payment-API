CREATE TABLE `users` (
  `user_id` int PRIMARY KEY,
  `username` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `created_at` datetime
);

CREATE TABLE `products` (
  `product_id` int PRIMARY KEY,
  `product_name` varchar(255),
  `description` text,
  `price` decimal,
  `availability` varchar(255),
  `created_at` datetime
);

CREATE TABLE `orders` (
  `order_id` int PRIMARY KEY,
  `user_id` int,
  `product_id` int,
  `quantity` int,
  `total_price` decimal,
  `status` varchar(255),
  `created_at` datetime
);

CREATE TABLE `payments` (
  `payment_id` int PRIMARY KEY,
  `order_id` int,
  `payment_gateway` varchar(255),
  `transaction_id` varchar(255),
  `amount` decimal,
  `status` varchar(255),
  `created_at` datetime
);

CREATE TABLE `transactions` (
  `transaction_id` int PRIMARY KEY,
  `user_id` int,
  `order_id` int,
  `payment_id` int,
  `transaction_type` varchar(255),
  `amount` decimal,
  `description` text,
  `created_at` datetime
);

CREATE TABLE `logs` (
  `log_id` int PRIMARY KEY,
  `user_id` int,
  `action` varchar(255),
  `description` text,
  `created_at` datetime
);

ALTER TABLE `orders` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

ALTER TABLE `payments` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

ALTER TABLE `transactions` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `transactions` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

ALTER TABLE `transactions` ADD FOREIGN KEY (`payment_id`) REFERENCES `payments` (`payment_id`);

ALTER TABLE `logs` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
