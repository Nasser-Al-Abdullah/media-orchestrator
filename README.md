# Media Orchestrator

A backend systems engineering project built with NestJS, TypeScript, PostgreSQL, Redis, Prisma, Docker, and BullMQ.

This project serves as a hands-on exploration of NestJS architecture while applying backend engineering concepts previously developed through production experience with Express.js and other backend frameworks.

Beyond learning NestJS itself, the project focuses on deeper backend systems topics such as dependency injection, modular architecture, asynchronous processing, caching, queues, background workers, and scalable application design.

The goal is to bridge framework knowledge with backend engineering principles and gain practical experience implementing patterns commonly found in modern production systems.

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

- Apply existing backend engineering experience to the NestJS ecosystem
- Develop a deeper understanding of NestJS architecture and design patterns
- Explore Dependency Injection and Inversion of Control in practice
- Design modular and maintainable backend systems
- Implement asynchronous processing using BullMQ and Redis
- Gain hands-on experience with background workers and job queues
- Explore caching and performance optimization strategies
- Understand distributed systems concepts at a practical level
- Build production-style infrastructure using Docker and PostgreSQL
- Document architectural decisions and engineering trade-offs

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
