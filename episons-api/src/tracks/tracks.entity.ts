import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "../users/users.entity";
import {UsersService} from "../users/users.service";

@Entity("tracks")
export class Track {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'track_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  url: string;

  @ManyToMany(() => User)
  tags: User[]
}
