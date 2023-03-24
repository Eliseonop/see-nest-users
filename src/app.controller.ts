import { Empresa } from "./empresas/entities/empresa.entity";
import { Task } from "./models/task.model";
import { Room } from "./models/room.model";
import { User, UserModel } from "./models/user.model";
import { Controller, Get, Sse, Post, Body, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { Observable } from "rxjs";
import { MessageEvent } from "./models/room.model";

interface CustomEvent extends Omit<MessageEvent, "id"> {}

@Controller("api")
export class AppController {
  constructor(private readonly eventosService: AppService) {}

  @Get("/eventos")
  @Sse()
  getServerSentEvents(@Query() query: any): Observable<CustomEvent> {
    const { empresa } = query;
    const empresaObservable =
      this.eventosService.getObservableByEmpresa(empresa);
    console.log("empresaObservable", this.eventosService.empresasObservables);
    return empresaObservable.asObservable();
  }

  @Post("/data")
  enviarEvento(@Body() eventoDto: any): void {
    const { empresa, data } = eventoDto;
    // Envía el evento a todos los observadores de la empresa dada
    console.log("eventoDto", eventoDto);
    this.eventosService.enviarEvento(empresa, data);
  }
}
