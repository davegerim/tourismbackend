import { User } from 'src/user/entities/user.entity';

export class UserResponsePayload {
  constructor(user: User) {
    (this.email = user.email),
      (this.sub = user.id),
      (this.role = user.role),
      // (this.pwdChangeRequired = user.pwd_change_required),
      (this.id = user.id);
    // (this.emailChangeRequired = user.email_change_required);
  }

  email: string;
  sub: string;
  role: string;
  pwdChangeRequired: boolean;
  id: string;
  emailChangeRequired: boolean;
}
