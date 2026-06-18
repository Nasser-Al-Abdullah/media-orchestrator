import {
    Post,
    Get,
    Put,
    Delete,
    Param,
    Query,
    Body,
    Controller,
} from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video-dto';
import { GetVideoDto } from './dto/get-video-dto';
import { VideoService } from './video.service';
import { PutVideoDto } from './dto/put-video-dto';

@Controller('videos')
export class VideoController {
    constructor(private readonly videoService: VideoService) {}

    @Get()
    getAll() {
        return this.videoService.getAll();
    }

    @Get()
    get(@Query() getVideoDto: GetVideoDto) {
        return this.videoService.get(getVideoDto);
    }

    @Post()
    create(@Body() createVideoDto: CreateVideoDto) {
        return this.videoService.create(createVideoDto);
    }

    @Put()
    put(@Body() putVideoDto: PutVideoDto) {
        return this.videoService.put(putVideoDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.videoService.delete(id);
    }
}
