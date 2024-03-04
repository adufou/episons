import { Module } from '@nestjs/common';
import {TracksService} from "./tracks.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersController} from "../users/users.controller";
import {Track} from "./tracks.entity";
import {TracksController} from "./tracks.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Track]),],
  controllers: [TracksController],
  providers: [TracksService]
})
export class TracksModule {}
