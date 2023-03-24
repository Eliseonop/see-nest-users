import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop({ type: String})
  data: string;

  @Prop()
  Events: string[]
}
export const EventSchema = SchemaFactory.createForClass(Event);
