# E-Commerce Platform

A modern e-commerce platform built with Node.js, Express, TypeScript, and MongoDB. This project demonstrates a complete DevOps pipeline with containerization, orchestration, CI/CD, and monitoring.

## Features

- User authentication and authorization (JWT, bcrypt)
- Product catalog management
- Shopping cart functionality
- RESTful API architecture
- **Prometheus metrics endpoint** (`/metrics`)

## Tech Stack

| Category         | Technology                      |
| ---------------- | ------------------------------- |
| Backend          | Node.js, Express.js, TypeScript |
| Database         | MongoDB with Mongoose ODM       |
| Containerization | Docker, Docker Compose          |
| Orchestration    | Kubernetes                      |
| CI/CD            | Jenkins                         |
| Monitoring       | Prometheus, Grafana, cAdvisor   |

---

## DevOps Tools Explained

### 🐳 Docker

**What it does:** Packages the application and its dependencies into a lightweight, portable container.

- `Dockerfile`: Defines how to build the application image.
- Ensures the app runs the same way on any machine.

### 🐙 Docker Compose

**What it does:** Defines and runs multi-container applications.

- `docker-compose.yml`: Starts the app, MongoDB, Prometheus, Grafana, and cAdvisor together.
- **Command:** `docker compose up -d --build`

### ☸️ Kubernetes (K8s)

**What it does:** Orchestrates containers at scale in production.

- `k8s/app-deployment.yaml`: Runs 3 replicas of the app for high availability.
- `k8s/mongo-deployment.yaml`: Runs MongoDB.
- `k8s/monitor-deployment.yaml`: Runs Prometheus and Grafana.
- **Command:** `kubectl apply -f k8s/`

### 🔄 Jenkins

**What it does:** Automates CI/CD pipelines.

- `Jenkinsfile`: Defines stages (Install, Build, Test, Docker Build).
- Triggers automatically on code push.

### 📊 Prometheus

**What it does:** Collects and stores time-series metrics from the application.

- Scrapes `/metrics` endpoint every 5 seconds.
- `prometheus.yml`: Configuration file.
- **Access:** `http://localhost:9090`

### 📈 Grafana

**What it does:** Visualizes metrics from Prometheus in dashboards.

- Create graphs for CPU, memory, request rates.
- **Access:** `http://localhost:3000` (admin/admin)

### 📦 cAdvisor

**What it does:** Monitors Docker container resource usage.

- Provides CPU, memory, and network stats per container.
- **Access:** `http://localhost:8080`

---

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- Minikube (for Kubernetes deployment)

### Run with Docker Compose

```bash
git clone https://github.com/nhahub/NHA-243.git
cd NHA-243
docker compose up -d --build
```

### Run with Kubernetes (Minikube)

```bash
docker build -t ecommerce-app:latest .
minikube image load ecommerce-app:latest
kubectl apply -f k8s/
minikube service ecommerce-app
```

### Run Locally (Development)

```bash
npm install
npm run dev
```

---

## API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | `/user/register` | Register a new user |
| POST   | `/user/login`    | Login user          |
| GET    | `/products`      | Get all products    |
| POST   | `/cart`          | Add item to cart    |
| GET    | `/metrics`       | Prometheus metrics  |

---

## Project Structure

```
├── src/                    # Application source code
├── k8s/                    # Kubernetes manifests
│   ├── app-deployment.yaml
│   ├── mongo-deployment.yaml
│   └── monitor-deployment.yaml
├── Dockerfile              # Docker image definition
├── docker-compose.yml      # Multi-container setup
├── Jenkinsfile             # CI/CD pipeline
├── prometheus.yml          # Prometheus config
├── package.json
└── tsconfig.json
```

## License

MIT
