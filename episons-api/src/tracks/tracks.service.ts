
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Track} from "./tracks.entity";
import {CreateTrackDto} from "./tracks.dto";

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track) private readonly trackRepository: Repository<Track>,
  ) {}

  createTrack(createTrackDto: CreateTrackDto) {
    const newUser = this.trackRepository.create(createTrackDto);
    return this.trackRepository.save(newUser);
  }

  findTrackById(id: number) {
    return this.trackRepository.findOneBy({id: id});;
  }

  findTracks() {
    return this.trackRepository.find();
  }
}
