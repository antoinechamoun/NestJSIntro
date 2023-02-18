import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "Hello there!";
  }

  @Get("/bye")
  getByeThere() {
    return "Bye there!";
  }
}
