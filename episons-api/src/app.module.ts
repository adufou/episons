import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TracksModule } from './tracks/tracks.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [UsersModule, TracksModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
