# E-commerce Platform

A modern e-commerce platform built with Node.js, Express, TypeScript, and MongoDB.

## Features

- User authentication and authorization
- Product catalog management
- Shopping cart functionality
- Order processing
- Inventory management
- RESTful API architecture

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, bcrypt
- **Development**: Docker, Docker Compose
- **CI/CD**: Jenkins

## CI/CD Pipeline

This project uses Jenkins for Continuous Integration and Continuous Deployment. The pipeline is defined in `Jenkinsfile` and includes the following stages:

1.  **Install Dependencies**: Installs project dependencies using `npm install`.
2.  **Build**: Compiles the TypeScript code using `npm run build`.
3.  **Test**: Runs automated tests (currently a placeholder).
4.  **Docker Build**: Builds the Docker image for the application.

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js (for local development without Docker)
- MongoDB (for local development without Docker)

### Installation with Docker

1. Clone the repository:

```bash
git clone https://github.com/MohamedLatif5/FlowCommerce.git

2. Start the application using Docker Compose:
 docker-compose up
```
