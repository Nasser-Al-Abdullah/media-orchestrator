import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { RedisModule } from './infastructure/redis/redis.module';

@Module({
    imports: [VideoModule, RedisModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
