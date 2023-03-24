import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/users/schema/user.schema";

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({
    unique: true,
  })
  id: number;
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  })
  user: User;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
