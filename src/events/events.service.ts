import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";

@Injectable()
export class EventsService {
  sendData(data: any) {
    return data;
  }

  conect() {}
}
