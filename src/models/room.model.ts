import { UserModel } from "./user.model";
import { Observer } from "rxjs";

export interface MessageEvent {
  data: string;
  id: number;
}

export interface Room {
  id: number;
  name: string;
  users: UserModel[];
  empresa: number;
  data : string;
}
