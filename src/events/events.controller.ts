import { map } from "rxjs";
import { interval } from "rxjs";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Sse,
} from "@nestjs/common";
import { EventsService } from "./events.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { Observable } from "rxjs";

@Controller("events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  sendData(@Body() data: any) {
    return this.eventsService.sendData(data);
  }

  
  @Sse("conect")
  sendEvent(): Observable<MessageEvent> {
    return interval(1000).pipe(map((num) => ({ data: "Hello World!" + num })));
  }
}
interface MessageEvent {
  data: string;
}
