import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { PrismaModule } from 'src/infastructure/prisma/prisma.module';
import { RedisModule } from 'src/infastructure/redis/redis.module';

@Module({
    imports: [PrismaModule, RedisModule],
    providers: [VideoService],
    controllers: [VideoController],
})
export class VideoModule {}
