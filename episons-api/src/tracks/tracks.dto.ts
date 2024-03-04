import {ApiProperty} from "@nestjs/swagger";

export class CreateTrackDto {
  @ApiProperty()
  url: string;
}
