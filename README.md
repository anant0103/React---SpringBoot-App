# 🚀 React + Sprintboot CRUD App ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 	![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)

#### A simple Employee Management CRUD application built using React for the frontend and Spring Boot for the backend.

![App image](https://github.com/anant0103/React---SpringBoot-App/blob/master/Images/Screenshot%20from%202025-06-22%2010-38-56.png)
![App image](https://github.com/anant0103/React---SpringBoot-App/blob/master/Images/Screenshot%20from%202025-06-22%2010-39-00.png)

## 📑 Table of Contents
* [Overview](#overview)
* [Technologies Used](#Technologies-Used)
* [Setup Instructions](#setup-instructions)
  * [Frontend Setup](#Frontend-Setup)
  * [Backend Setup](#Backend-Setup)
  * [Database Setup](#Database-Setup)

## 📌 Overview
This application allows users to:
* Add, update, view, and delete employee records.
* Integrate frontend and backend seamlessly via REST APIs.
* Demonstrate full-stack development with modern tooling.
	
## 🧰 Technologies Used
This project was developed with:
* Frontend: React (v18.2.0)
* Backend: Spring Boot (v2.7.5)
* Database: MySQL
* Build Tools: Maven, npm
	
## ⚙️ Setup Instructions
### 🔽 Clone the Repository
```
>> git clone https://github.com/anant0103/React---SpringBoot-App
>> cd React---SpringBoot-App
```
### 🖥️ Frontend Setup
1. Navigate to the frontend directory:
```
>> cd springbooot-react-frontend
```
2. Install dependencies:
```
>> npm i --force
```
3. Start the React development server:
```
>> npm start
```

### 🗄️ Backend Setup
1. Navigate to the backend directory:
```
>> cd springboot-react-backend
```
2. Build the project with Maven:
```
>> mvn clean install
```
3. Start the Spring Boot server:
```
>> mvn spring-boot:run
```

### 🗃️ Database Setup (MySQL)
1. Create a new database in MySQL:
```
>> create database ems_react_springboot;
```
2. Update the database connection details in the application.yml file:
```
spring.datasource.url=jdbc:mysql://localhost:3306/ems_react_springboot?useSSL=false
spring.datasource.username=USERNAME
spring.datasource.password=PASSWORD
```
