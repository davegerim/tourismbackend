import { Otp } from 'src/otp/entities/otp.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToMany(() => User, (user) => user.otp)
  otp: Otp[];

  @Column({ default: false })
  pwd_change_required: boolean;

  @Column({ default: false })
  email_change_required: boolean;

  @Column({ default: false })
  email_confirmed: boolean;

  @Column({ default: false })
  phone_confirmed: boolean;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
