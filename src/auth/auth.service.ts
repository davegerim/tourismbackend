/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProfileService } from 'src/profile/profile.service';

import { UserResponsePayload } from './dtos/response/user-response-payload.reponse.dto';
import * as bcrypt from 'bcrypt';
import { UserRoleType } from 'src/user/enums/user-role.enum';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService, // private teacherService: TeachersService, // private studentService: StudentsService, // private employeeService: EmployeesService
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    //check pssword
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: User) {
    console.log({ user });
    let getMyBranches: any;

    if (user)
      switch (user.role) {
        case UserRoleType.ADMINISTRATOR:
          break;
        case UserRoleType.USER:
          break;

        // getMyBranches = await this.employeeService.GetMyBranches(
        //   user?.profile?.id,
        // );

        default:
          throw new BadRequestException('Role is not found');
      }

    const payload: UserResponsePayload = {
      email: user.email,
      sub: user.id,
      role: user.role,
      pwdChangeRequired: user.pwd_change_required,
      id: user.id,
      emailChangeRequired: user.email_change_required,
    };

    return {
      data: {
        role: payload.role,
        email: payload.email,
        access_token: this.jwtService.sign(payload),
        pwdChangeRequired: payload.pwdChangeRequired,
        id: payload.id,
        emailChangeRequired: payload.emailChangeRequired,
        getMyBranches: getMyBranches,
      },
    };
  }

  async me(token: string) {
    const defaultReturnObject = { authenticated: false, user: null };
    const user = this.jwtService.verify(token);

    if (!user) {
      return {
        status: 400,
        postMessage: user,
      };
    }
    return { authenticated: true, user: user };
  }
}
