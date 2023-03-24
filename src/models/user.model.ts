import { BehaviorSubject } from "rxjs";

export class UserModel {
  id: number;
  name: string;
  empresa: number;
  response: BehaviorSubject<MessageEvent> = new BehaviorSubject<MessageEvent>(
    null
  );

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.empresa = data.empresa;
  }
}
export interface User {
  id: number;
  name: string;
  empresa: number;
}
