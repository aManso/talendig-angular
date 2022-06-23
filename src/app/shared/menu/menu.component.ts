import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Capital, Pais } from 'src/app/paises/paises';
import { LoggerService } from '../servicios/logger.service';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit{
  public edad = 30;
  @Input('colorMenu') color:string = 'red';
  @Output() alerta: EventEmitter<Capital> = new EventEmitter<Capital>()
  @ViewChild(NgModel) inputColor: NgModel;


  public constructor(
    private _paisesService: PaisesService,
    private _loggerService: LoggerService,
  ) {
    this._loggerService.log('MenuComponent');
  }

  public ngOnInit(): void {
    console.log(this.inputColor);
  }

  public ngAfterViewInit(): void {
    console.log(this.inputColor);
  }

  // public cambiarFondo(): void {
  //   this.cambiarFondoEmitter.emit(true);
  // }

  public mostrarAlerta() {
    console.log(this.inputColor);
    const miCapital: Capital = {
      nombre: 'Paris',
      poblacion: 3122312,
      fecha: new Date()
    }
    this.alerta.emit(miCapital);
  }

  public mostrarPais() {
    // Obtenemos la lista actual de paises
    const paises = this._paisesService.getListaDePaises();
    // Anadimos un nuevo pais
    paises.push({
      nombre: 'Japon',
      poblacion: 231,
      capital: {
        nombre: 'tokio',
        poblacion: 2131
      }
    } as Pais)
    // guardamos todos los paises de nuevo en el servicio
    this._paisesService.setListaDePaises(paises);
  }

}