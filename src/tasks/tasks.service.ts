import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task, TaskDocument } from "./schema/tasks.schema";

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private usersModel: Model<TaskDocument>
  ) {}

  async create(name: string, description: string) {
    const taskCreated = this.usersModel.create({
      name,
      description,
    });
    return taskCreated;
  }

  async findAll() {
    return await this.usersModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
