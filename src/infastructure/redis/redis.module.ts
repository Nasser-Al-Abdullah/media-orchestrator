import { Module, Scope } from '@nestjs/common';
import Redis from 'ioredis';

import { RedisService } from './redis.service';
import { REDIS_CLIENT } from './redis.constants';

@Module({
    providers: [
        {
            provide: REDIS_CLIENT,
            scope: Scope.DEFAULT, // Default scope is singleton, which means the same instance will be shared across the application | Can be emitted completely because its the default scope
            useFactory: () =>
                new Redis({
                    host: process.env.REDIS_HOST || 'localhost',
                    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
                }),
        },
        RedisService,
    ],
    exports: [REDIS_CLIENT, RedisService],
})
export class RedisModule {}
