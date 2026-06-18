import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

import { REDIS_CLIENT } from './redis.constants';

@Injectable()
export class RedisService {
    constructor(
        @Inject(REDIS_CLIENT)
        private readonly redis: Redis,
    ) {}

    async set(key: string, value: string): Promise<'OK'> {
        return this.redis.set(key, value);
    }

    async get(key: string): Promise<string | null> {
        return this.redis.get(key);
    }

    async del(key: string): Promise<number> {
        return this.redis.del(key);
    }

    async exists(key: string): Promise<number> {
        return this.redis.exists(key);
    }
}
