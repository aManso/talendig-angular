import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Noticia } from './noticia.interface';
import { SeccionComponent } from './seccion/seccion.component';

@Component({
  selector: 'app-clase2-periodico',
  templateUrl: './clase2-periodico.component.html',
  styleUrls: ['./clase2-periodico.component.scss']
})
export class Clase2PeriodicoComponent implements OnInit {

  @ViewChildren(SeccionComponent) query: QueryList<SeccionComponent>;


  public noticiasLocales: Noticia;
  public noticiasInternacionales: Noticia;
  public sections: Noticia[];

  public hideLocals = false;
  public visibilityInternacionales: string = 'visible';

  public ngOnInit(): void {
    this.noticiasLocales = {
      class: 'noticias-locales',
      imagen: 'https://estaticos-cdn.epe.es/clip/2004de3e-9a06-40e5-9e40-b3eac6a76967_alta-libre-aspect-ratio_default_0.jpg',
      titulo: 'Noticias locales',
      contenido: 'Ejemplo de noticias locales',
      likes: 3
    };

    this.noticiasInternacionales = {
      class: 'noticias-internacionales',
      imagen: 'assets/internationals-news.jpeg',
      contenido: 'Ejemplo de noticias internacionales',
      titulo: 'Noticias internacionales',
      likes: 5
    }
    this.sections = [this.noticiasLocales, this.noticiasInternacionales]
  }

  public ngAfterViewInit () {
    this.query.changes.subscribe((items: Array<SeccionComponent>) => {
      items.forEach((item: SeccionComponent) => {
        console.log('likes: '+ item.likes);
      });
    });
  }

  set changeVisibilityInternationals(visibility: string) {
    this.visibilityInternacionales = visibility;
  }

  public hideInternationals() {
    this.changeVisibilityInternationals = this.visibilityInternacionales === 'visible' ? 'hidden' : 'visible';
  }

  public sumarLike(likes: number, noticias: Noticia): void {
    noticias.likes = likes;
  }

  public eliminar(index: number) {
    this.sections.splice(index, 1);
  }

}
