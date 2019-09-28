# RESTFUL_API_POINT_OF_SALES

---
## Table of Contents
- [RESTFUL_API_POINT_OF_SALES](#restfulapipointofsales)
  - [Table of Contents](#table-of-contents)
  - [- Dependencies](#dependencies)
  - [Introduction](#introduction)
  - [- Login and Register With JWT](#login-and-register-with-jwt)
  - [Tools](#tools)
  - [- Postman](#postman)
  - [Installation](#installation)
    - [Clone](#clone)
    - [Create Environment Variable](#create-environment-variable)
    - [Start Development Server](#start-development-server)
  - [Dependencies](#dependencies)
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
- mysql
- morgan
- bcrypt
- body-parser
- cors
- dotenv
- express
- express-fileupload
- jsonwebtoken