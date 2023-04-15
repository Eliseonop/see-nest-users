import { Subject } from 'rxjs'
import { Injectable } from '@nestjs/common'

type EmpresaObservables = {
  observable: Subject<MessageEvent>
  user: string[]
}

@Injectable()
export class AppDosService {
  empresasObservables: { [key: string]: EmpresaObservables } = {}

  // Crea un objeto para almacenar los observables de cada empresa

  // Devuelve un observable para la empresa dada
  public getObservableByEmpresa (
    empresa: string,
    user: string
  ): Subject<MessageEvent<ModelResDos>> {
    // Si ya existe un observable para la empresa, lo devuelve
    if (this.empresasObservables[empresa]) {
      // Si el usuario no está en la lista de usuarios, lo añade
      if (!this.empresasObservables[empresa].user.includes(user)) {
        this.empresasObservables[empresa].user.push(user)
      }
      return this.empresasObservables[empresa].observable
    }

    // Si no, crea un nuevo observable y lo almacena en el objeto de empresasObservables
    const nuevoObservable = new Subject<MessageEvent<ModelResDos>>()
    const empresaObservables = { observable: nuevoObservable, user: [user] }
    this.empresasObservables[empresa] = empresaObservables
    return nuevoObservable
  }

  public enviarEvento (
    empresa: string,
    mensaje: MessageEvent<ModelResDos>
  ): void {
    // Envía un mensaje a todos los observadores de la empresa
    if (this.empresasObservables[empresa]) {
      this.empresasObservables[empresa].observable.next(mensaje)
    }
  }

  getDatos (): any {
    const datos = this.empresasObservables[0].user
    return datos
  }
}

export interface ModelResDos {
  user: string
  item: string
  crudId: string
  empresa: string
}
