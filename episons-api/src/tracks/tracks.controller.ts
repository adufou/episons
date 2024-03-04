import {
  Body,
  Controller,
  Get, Param,
  ParseIntPipe,
  Post,

} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {TracksService} from "./tracks.service";
import {CreateTrackDto} from "./tracks.dto";

@Controller('tracks')
@ApiTags("tracks")
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Get()
  getUsers() {
    return this.tracksService.findTracks();
  }

  @Get('id/:id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.tracksService.findTrackById(id);
  }

  @Post('create')
  createUsers(@Body() createTrackDto: CreateTrackDto) {
    return this.tracksService.createTrack(createTrackDto);
  }
}
