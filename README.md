# Media Orchestrator

A backend systems engineering project built with NestJS, TypeScript, PostgreSQL, Redis, Prisma, Docker, and BullMQ.

This project serves as a practical transition from Express.js-based backend development into the NestJS ecosystem while exploring more advanced backend engineering concepts.

The objective is not only to learn NestJS, but to apply existing backend development experience to a framework that emphasizes modular architecture, dependency injection, scalability, and maintainability. Along the way, the project explores asynchronous processing, caching, queues, background workers, and production-oriented system design.

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

- Apply existing backend engineering experience to NestJS
- Develop a deeper understanding of Dependency Injection and Inversion of Control
- Build modular and maintainable backend systems
- Explore queue-based and asynchronous processing patterns
- Implement background workers using BullMQ
- Gain practical experience with Redis caching and messaging patterns
- Understand production-style backend architecture
- Explore scalability and reliability considerations in modern backend applications

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
- Structured logging
- Monitoring and observability
- Event-driven workflows

## Project Structure

```text
src/
├── infrastructure/   # Shared infrastructure services
├── video/            # Video domain module
├── app.module.ts
└── main.ts

prisma/               # Database schema and migrations
test/                 # Integration and e2e tests
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

## Learning Focus

This repository is focused on understanding and implementing:

- NestJS architecture
- Dependency Injection
- Modular application design
- PostgreSQL data modeling
- Redis fundamentals
- Queue systems with BullMQ
- Background workers
- Caching strategies
- Scalable backend patterns
- Production-oriented development practices

```

```
