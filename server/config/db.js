// CREATE TABLE USERS (
//     id SERIAL PRIMARY KEY,
//     email TEXT NOT NULL UNIQUE,
//     password TEXT NOT NULL,
//     valid BOOLEAN
//   );
  
//   CREATE TABLE SEASON (
//     id_season INT,
//     id_item INT
//   );
  
//   CREATE TABLE ITEM (
//     id_user INT,
//     id_type INT,
//     date DATE,
//     name VARCHAR(30),
//     notes TEXT
//   );
  
//   CREATE TABLE TYPE (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(30)
//   );
  
//   CREATE TABLE USERTYPE (
//     id_user INT,
//     id_type INT
//   );
  
//   CREATE TABLE STYLE (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(30)
//   );
  
//   CREATE TABLE USERSTYLE (
//     id_user INT,
//     id_style INT
//   );
  
//   CREATE TABLE COLOR (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(30)
//   );
  
//   CREATE TABLE USERCOLOR (
//     id_user INT,
//     id_color INT
//   );
  
//   CREATE TABLE COMPOSITION (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(30)
//   );
  
  
//   CREATE TABLE USERCOMPOSITION (
//     id_user INT,
//     id_composition INT
//   );
  