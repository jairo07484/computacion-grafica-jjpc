import { Component } from '@angular/core';
/*import { RouterOutlet } from '@angular/router';*/
import { HeaderComponent } from "./header/header.component";
import { ContenedorComponent } from './contenedor/contenedor.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContenedorComponent, ContentComponent,
    FooterComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller4_angular';
}
