import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller("rutaPrincipal")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiExcludeEndpoint()
  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }
}
