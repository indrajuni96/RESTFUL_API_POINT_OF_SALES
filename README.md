# RESTFUL_API_POINT_OF_SALES

## Table of Contents
- [Introduction](#introduction)
- [Tools](#Tools)
- [Installation](#Installation)
- [Dependencies](#Dependencies)
- [Route](#Route)
---
 
## Introduction
RESTFUL API POINT OF SALES is an app point of sales system. the main features are: 
- CRUD Products
- CRUD Categories
- ADD/Reduce Product(Quantity)
- Search product by name
- Sort product by name, category
- Pagination
- Cannot reduce order below 0 (-1,-5,etc)
- Allowed CORS
- Login and Register With JWT
---

## Tools
- XAMPP
- Visual Studio Code
- Node.js
- Terminal
- Postman
---

## Installation

### Clone
```bash
$ git clone https://github.com/indrajuni96/RESTFUL_API_POINT_OF_SALES.git
$ cd RESTFUL_API_POINT_OF_SALES
$ npm install
```
---

### Create Environment Variable
```bash
$ cp .env.example .env
$ nano .env
```
---
### Start Development Server
```bash
$ npm start
```
--- 

## Dependencies

| Plugin |
| ------ |
| express |
| express-fileupload |
| mysql |
| bcryptjs |
| body-parser |
| cors |
| dotenv |
| jsonwebtoken |
| morgan |

## API Route URL

- Users
  - (POST) http://localhost:4000/users/register Register users
  - (POST) http://localhost:4000/users/login login users
  - (GET)  http://localhost:4000/users Get data users
  
- Categori
  - (GET) http://localhost:4000/api/v1/categories/ Get all categories
  - (GET) http://localhost:4000/api/v1/categories/5 Get categori by ID categori
  - (POST) http://localhost:4000/api/v1/categories Add data categori
  - (PUT) http://localhost:4000/api/v1/categories/5 Edit data categori
  - (DELETE) http://localhost:4000/api/v1/categories/5 Delete data categori

- Products
  - (GET) http://localhost:4000/api/v1/products Get all products
  - (GET) http://localhost:4000/api/v1/products/6 Get product by ID product 
  - (POST) http://localhost:4000/api/v1/products/ Add data product
  - (PUT) http://localhost:4000/api/v1/products/6 Edit data product
  - (DELETE) http://localhost:4000/api/v1/products/6 Delete data product

License
----

© Indra Juniyanto