import { Component } from '@angular/core';
import noticiasJson from '../../assets/noticias.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  noticias: any[] = noticiasJson;

  eliminarNoticia(id: number) {
    const index = this.noticias.findIndex(noticia => noticia.id === id);
    if (index !== -1) {
      this.noticias.splice(index, 1);
      console.log(`Noticia con ID ${id} eliminada correctamente`);
    } else {
      console.log(`No se encontró la noticia con ID ${id}`);
    }
  }

}
