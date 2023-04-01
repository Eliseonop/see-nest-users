import { Subject } from "rxjs";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  // Crea un objeto para almacenar los observables de cada empresa
  // empresasObservables: { [key: string]: Subject<MessageEvent> } = {};

  // // Devuelve un observable para la empresa dada
  // public getObservableByEmpresa(empresa: string): Subject<MessageEvent> {
  //   // Si ya existe un observable para la empresa, lo devuelve
  //   if (this.empresasObservables[empresa]) {
  //     return this.empresasObservables[empresa];
  //   }

  //   // Si no, crea un nuevo observable y lo almacena en el objeto de empresasObservables
  //   const nuevoObservable = new Subject<MessageEvent>();
  //   this.empresasObservables[empresa] = nuevoObservable;
  //   return nuevoObservable;
  // }

  // public enviarEvento(empresa: string, mensaje: MessageEvent): void {
  //   // Envía un mensaje a todos los observadores de la empresa
  //   if (this.empresasObservables[empresa]) {
  //     this.empresasObservables[empresa].next(mensaje);
  //   }
  // }
}
