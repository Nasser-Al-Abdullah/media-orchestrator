import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infastructure/prisma/prisma.service';
import { RedisService } from 'src/infastructure/redis/redis.service';
import { CreateVideoDto } from './dto/create-video-dto';
import { GetVideoDto } from './dto/get-video-dto';
import { PutVideoDto } from './dto/put-video-dto';

@Injectable()
export class VideoService {
    constructor(
        private prisma: PrismaService,
        private readonly redisService: RedisService,
    ) {}

    getAll() {
        return this.prisma.video.findMany({
            select: {
                id: true,
                status: true,
            },
        });
    }

    get(getVideoDto: GetVideoDto) {
        return this.prisma.video.findUnique({
            where: {
                id: getVideoDto.id,
            },
            select: {
                id: true,
                status: true,
            },
        });
    }

    create(createVideoDto: CreateVideoDto) {
        return this.prisma.video.create({
            data: {
                filename: createVideoDto.filename,
                status: 'QUEUED',
            },
        });
    }

    put(putVideoDto: PutVideoDto) {
        return this.prisma.video.update({
            where: {
                id: putVideoDto.id,
            },
            data: {
                status: putVideoDto.filename,
            },
        });
    }

    delete(id: string) {
        return this.prisma.video.delete({
            where: {
                id,
            },
        });
    }
}
