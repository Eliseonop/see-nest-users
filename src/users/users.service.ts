import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schema/user.schema";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private usersModel: Model<UserDocument>
  ) {}

  // @UseInterceptors(ClassSerializerInterceptor)
  async register(name: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const createdUser = await this.usersModel.create({
        name,
        password : hashedPassword,
      });
      console.log(createdUser);
      return createdUser;
    } catch (error) {
      console.log(error);

      if (error?.code === 11000) {
        throw new HttpException(
          "User with that name already exists",
          HttpStatus.BAD_REQUEST
        );
      }
      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async login(name: string, passwordHash: string) {
    // dto _> trae la data
    try {
      const user = await this.usersModel.findOne({ name });

      const isPasswordMatching = await bcrypt.compare(
        passwordHash,
        user.password
      );
      if (!isPasswordMatching) {
        throw new HttpException(
          "Wrong credentials provided",
          HttpStatus.BAD_REQUEST
        );
      }

      return user;
    } catch (error) {
      throw new HttpException(
        "Wrong credentials provided",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  findAll(): Promise<User[]> {
    return this.usersModel.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersModel.findById(id);

    if (user) {
      return user;
    }
    throw new HttpException(
      "User with this id does not exist",
      HttpStatus.NOT_FOUND
    );
  }

  async findByName(name: string): Promise<User> {
    const user = this.usersModel.findOne({ name });
    if (user) {
      return user;
    }
    throw new HttpException(
      "User with this id does not exist",
      HttpStatus.NOT_FOUND
    );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<void> {
    return await this.usersModel.findByIdAndDelete(id);
  }
}
