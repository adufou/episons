import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {TracksModule} from './tracks/tracks.module';
import {TagModule} from './tag/tag.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, UsersModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/../**/*.entity.js'],
        retryAttempts: 50,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    TagModule,
    TracksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
