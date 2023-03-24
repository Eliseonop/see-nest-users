import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EmpresaDocument = HydratedDocument<Empresa>;

@Schema()
export class Empresa {
  @Prop({
    unique: true,
  })
  id: number;

  @Prop()
  name: string;

  @Prop({
    type: [Number],
  })
  users: number[];
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
