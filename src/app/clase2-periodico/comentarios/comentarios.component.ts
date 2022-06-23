import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit, AfterViewInit {

  @ViewChild('comentarioRef') comentarioRef: ElementRef<HTMLInputElement>;
  @ViewChild('autorRef') autorRef: ElementRef<HTMLInputElement>;

  public comentario: string;
  public autor: string;

  public ngOnInit(): void {
    // console.log(this.comentarioRef.nativeElement.value);
  }

  public ngAfterViewInit(): void {
    console.log(this.comentarioRef.nativeElement.value);
  }

  public enviarComentario(comentario: string, autor: string) {
    if (comentario && autor) {
      this.comentario = comentario;
      this.autor = autor;
      this.comentarioRef.nativeElement.value = '';
      this.autorRef.nativeElement.value = '';
    }
  }

}
