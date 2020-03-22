CREATE TABLE USERS
(
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    valid BOOLEAN
);

CREATE TABLE SEASON
(
    id_season INT,
    id_item INT
);

CREATE TABLE ITEM
(
    id_user INT,
    id_type INT,
    date DATE,
    name VARCHAR(30),
    notes TEXT
);

CREATE TABLE CATEGORY
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE TYPE
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    category_id INT
);

CREATE TABLE USERTYPE
(
    id_user INT,
    id_type INT
);

CREATE TABLE STYLE
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE USERSTYLE
(
    id_user INT,
    id_style INT
);

CREATE TABLE COLOR
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE USERCOLOR
(
    id_user INT,
    id_color INT
);

CREATE TABLE COMPOSITION
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE USERCOMPOSITION
(
    id_user INT,
    id_composition INT
);

INSERT INTO COMPOSITION
    (name)
VALUES
    ('cotton'),
    ('nylon'),
    ('polyester'),
    ('wool'),
    ('silk'),
    ('cashmere');

INSERT INTO CATEGORY
    (name)
VALUES
    ('Top'),
    ('Coat'),
    ('Bottom'),
    ('One piece'),
    ('Footwear'),
    ('Accessories'),
    ('Jewelry');

INSERT INTO TYPE
    (name, category_id)
VALUES
    ('t-shirt', 1),
    ('polo shirt', 1),
    ('long-sleeved shirt', 1),
    ('shirt', 1),
    ('blouse', 1),
    ('jumper', 1),
    ('hoodie', 1),
    ('sweatshirt', 1),
    ('bomber', 2),
    ('jacket', 2),
    ('coat', 2),
    ('suit', 2),
    ('cardigan', 2),
    ('jean', 3),
    ('skirt', 3),
    ('min-skirt', 3),
    ('short', 3),
    ('trousers', 3),
    ('cropped jeans', 3),
    ('pants', 3),
    ('sweat pants', 3),
    ('dress', 4),
    ('jumpsuit', 4),
    ('playsuit', 4),
    ('sneakers', 5),
    ('boots', 5),
    ('sneakers', 5),
    ('high-heeled', 5),
    ('flat shoe', 5),
    ('sandals', 5),
    ('slippers', 5),
    ('beany', 6),
    ('cap', 6),
    ('hat', 6),
    ('gloves', 6),
    ('scarf', 6),
    ('socks', 6),
    ('tights', 6),
    ('bag', 6),
    ('ring', 7),
    ('earring', 7),
    ('necklace', 7),
    ('watch', 7),
    ('bracelet', 7),
    ('pin', 7),
    ('tie', 7),
    ('belt', 7);
    
INSERT INTO STYLE
    (name)
VALUES('Streetwear'),
    ('Formal Office'),
    ('Business Casual'),
    ('Sports Wear'),
    ('Rocker'),
    ('Goth Fashion'),
    ('Hip Hop'),
    ('Casual'),
    ('Geeky'),
    ('Retro Fashion'),
    ('Punk'),
    ('Boho/Bohemian'),
    ('Grunge'),
    ('Flamboyant');         
INSERT INTO COLOR
    (name)
VALUES('black'),
    ('blue'),
    ('brown'),
    ('gold'),
    ('green'),
    ('grey'),
    ('orange'),
    ('pink'),
    ('purple'),
    ('red'),
    ('silver'),
    ('yellow'),
    ('white');    