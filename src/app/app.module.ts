import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importa los módulos necesarios de Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore } from '@firebase/firestore';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // Configura Firebase con las credenciales y opciones del entorno
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: getFirestore, useFactory: () => getFirestore() } // Agrega el proveedor para Firestore
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
