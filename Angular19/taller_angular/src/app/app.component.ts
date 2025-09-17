import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LogoComponent, HeaderComponent, BuscadorComponent, SidebarComponent,
    ContentComponent, FooterComponent, ContenedorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller_angular';
}
