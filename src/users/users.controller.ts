import { Controller, Body, Get, Param, Delete, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("login")
  async login(@Body() body: any) {
    const { name, password } = body;

    const loginUser = await this.usersService.login(name, password);
    return loginUser;
  }

  @Post("register")
  async register(@Body() body: any) {
    const { name, password } = body;

    const createdUser = await this.usersService.register(name, password);
    return createdUser;
  }

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(":id")
  getUserById(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Delete()
  async deleteUserById(@Body("userId") userId: string) {
    const createdUser = await this.usersService.remove(userId);
    return createdUser;
  }
}
