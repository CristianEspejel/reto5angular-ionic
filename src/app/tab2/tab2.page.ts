import { Component } from '@angular/core';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  titulo: string = '';
  fecha: string = '';
  descripcion: string = '';

  constructor() {}

  async agregarNoticia() {
    const db = getFirestore();

    try {
      await addDoc(collection(db, 'noticias'), {
        titulo: this.titulo,
        fecha: this.fecha,
        descripcion: this.descripcion
      });

      // Limpiar los campos después de guardar la noticia
      this.titulo = '';
      this.fecha = '';
      this.descripcion = '';

      console.log('Noticia guardada exitosamente');
    } catch (error) {
      console.error('Error al guardar la noticia:', error);
    }
  }
}
