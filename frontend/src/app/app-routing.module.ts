import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./components/home/home.component";
import { AboutComponent} from "./components/about/about.component";
import { ResultadoComponent} from "./components/resultado/resultado.component";
import { ZapatasComponent} from "./components/zapatas/zapatas.component";
import { PedestalComponent } from "./components/pedestal/pedestal.component";
import { SeleccionarZapataComponent } from './components/seleccionar-zapata/seleccionar-zapata.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercadeComponent } from './components/acercade/acercade.component';

const routes: Routes = [
  { path: "", component: InicioComponent},
  { path: 'home', component: HomeComponent},
  { path: 'acercade', component: AcercadeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'resultado', component: ResultadoComponent},
  { path: 'zapatas', component: ZapatasComponent},
  { path: 'pedestal', component: PedestalComponent},
  { path: 'seleccionarZapata', component: SeleccionarZapataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const app_routing = RouterModule.forRoot(routes);
