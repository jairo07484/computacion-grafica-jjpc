import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contenedor',
  imports: [SidebarComponent, ContentComponent, FooterComponent],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {

}
