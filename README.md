# Media Orchestrator

A backend systems engineering project built to explore scalable architectures using NestJS, TypeScript, PostgreSQL, Redis, Prisma, Docker, and BullMQ.

The goal of this project is not simply CRUD functionality, but understanding how modern backend systems are designed, structured, and scaled in production environments.

## Tech Stack

### Backend

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL

### Infrastructure

- Docker
- Docker Compose
- Redis

### Async Processing

- BullMQ
- Redis-backed queues

## Project Goals

This project is designed to demonstrate:

- Clean architecture principles
- Dependency Injection (DI)
- Modular NestJS design
- Database design and migrations
- Queue-based processing
- Background workers
- Caching strategies
- Event-driven workflows
- Scalable backend patterns

## Current Features

- Video management module
- PostgreSQL integration through Prisma
- Database migrations
- Dockerized infrastructure
- Redis integration
- REST API endpoints

## Planned Features

- BullMQ job queues
- Background video processing workers
- Retry and failure handling
- Rate limiting
- Redis caching layer
- Monitoring and logging
- Event-driven architecture
- Distributed processing patterns

## Project Structure

```text
src/
├── video/
├── prisma/
├── redis/
├── queue/
├── workers/
└── common/
```

## Getting Started

### Prerequisites

- Node.js
- Docker
- Docker Compose

### Installation

```bash
git clone <repository-url>
cd media-orchestrator

npm install
```

### Start Infrastructure

```bash
docker compose up -d
```

### Run Migrations

```bash
npx prisma migrate dev
```

### Start Development Server

```bash
npm run start:dev
```

## Learning Objectives

This repository serves as a hands-on exploration of:

- NestJS architecture
- TypeScript backend development
- PostgreSQL data modeling
- Redis fundamentals
- Queue systems with BullMQ
- Distributed systems concepts
- Backend scalability patterns
