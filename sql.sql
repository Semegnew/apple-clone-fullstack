//OpenAi@2023
//huludeig
//User “huludeig_huludeig” was added to the database “huludeig_apple”.
USE huludeig_apple;
DROP TABLE products;
DROP TABLE productdescription;
DROP TABLE productprice;

CREATE TABLE IF NOT EXISTS products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  product_url VARCHAR(50) NOT NULL,
  product_name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS productdescription (
  product_id INT PRIMARY KEY,
  product_brief_description VARCHAR(255),
  product_description TEXT,
  product_img VARCHAR(255),
  product_link VARCHAR(255),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE IF NOT EXISTS productprice (
  product_id INT PRIMARY KEY,
  starting_price VARCHAR(20),
  price_range VARCHAR(255),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO `products` (`product_url`, `product_name`) VALUES ('iphonese', 'iPhone SE');
INSERT INTO `products` (`product_url`, `product_name`) VALUES ('iphone11', 'iPhone 11');
INSERT INTO `products` (`product_url`, `product_name`) VALUES ('iphone11pro', 'iPhone 11 Pro');

INSERT INTO `productdescription` (`product_id`, `product_brief_description`, `product_description`, `product_img`, `product_link`) VALUES ('1', 'Lots to love. Less to spend.', 'iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.', "https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_se__barrz3dlvxea_small_2x.jpg", 'https://www.apple.com/shop/buy-iphone/iphone-11');
INSERT INTO `productdescription` (`product_id`, `product_brief_description`, `product_description`, `product_img`, `product_link`) VALUES ('2', 'Lots to love. Less to spend.', 'You can either pay for your new iPhone in full or pay monthly with carrier financing, iPhone Payments, the iPhone Upgrade Program, and now Apple Card Monthly Installments. Your carrier service plan will be charged separately. Just choose the option that works for you.', "https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11__bsnxu2gpf98i_small_2x.jpg", 'https://www.apple.com/shop/buy-iphone/iphone-11');
INSERT INTO `productdescription` (`product_id`, `product_brief_description`, `product_description`, `product_img`, `product_link`) VALUES ('3', 'A transformative triple‑camera system   that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.', 'Pro cameras. Pro display. Pro performance.', "https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11_pro__d2lf9zrtcv8m_small_2x.jpg", 'https://www.apple.com/shop/buy-iphone/iphone-11-pro');

INSERT INTO `productprice` (`product_id`, `starting_price`, `price_range`) VALUES ('1', '$399', 'From $9.54/mo. or $229 with trade-in.*');
INSERT INTO `productprice` (`product_id`, `starting_price`, `price_range`) VALUES ('2', '$449', 'From $18.70/mo. or $449 with trade-in.*');
INSERT INTO `productprice` (`product_id`, `starting_price`, `price_range`) VALUES ('3', '$679', 'From $28.29/mo. or $679 with trade-in.*');





IP_ADDRESS = '192.168.1.6'
SERVER_PORT =4550
MYSQL_PORT =3306
MYSQL_HOST ='sql7.freemysqlhosting.net'
MYSQL_USER ='sql7636451'
MYSQL_PASSWORD='qqfvlY1yw5'
MYSQL_DATABASE = 'sql7636451'
