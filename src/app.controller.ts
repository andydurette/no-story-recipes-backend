import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// import { IsEmail, IsNotEmpty } from 'class-validator';

// export class CreateUserDto {
//   @IsEmail()
//   email: string;

//   @IsNotEmpty()
//   password: string;
// }

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
