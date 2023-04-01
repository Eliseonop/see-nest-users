import { Empresa } from "./empresas/entities/empresa.entity";
import { Task } from "./models/task.model";
import { Room } from "./models/room.model";
import { User, UserModel } from "./models/user.model";
import { Controller, Get, Sse, Post, Body, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { Observable } from "rxjs";
import { AppDosService, ModelResDos } from "./appdos.service";

interface CustomEvent extends Omit<MessageEvent, "id"> { }

@Controller("api")
export class AppController {
  constructor(private readonly eventosService: AppDosService) { }

  @Get("/eventos")
  @Sse()
  getServerSentEvents(@Query() query: any): Observable<CustomEvent> {
    const { empresa, user } = query;
    const empresaObservable = this.eventosService.getObservableByEmpresa(
      empresa,
      user
    );
    console.log("empresaObservable", this.eventosService.empresasObservables);
    return empresaObservable.asObservable();
  }

  @Post("/data")
  enviarEvento(@Body() eventoDto: any): void {
    const { empresa, user, crudId, item, type } = eventoDto;

    const evento:any = {
      data: {
        user,
        item,
        crudId,
        empresa
      },
      lastEventId: "",
      type: type

      

    };


    console.log("eventoDto", eventoDto);
    this.eventosService.enviarEvento(empresa, evento);
  }
}
