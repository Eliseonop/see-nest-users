// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { HydratedDocument } from "mongoose";

// export type UserDocument = HydratedDocument<User>;

// @Schema()
// export class User {
//   @Prop({
//     unique: true,
//   })
//   id: number;

//   @Prop()
//   name: string;

//   //   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' })
//   //   empresas: Empresa[];
// }

// export const UserSchema = SchemaFactory.createForClass(User);

export interface User {
  id: number;
  name: string;
  password: string;
}
