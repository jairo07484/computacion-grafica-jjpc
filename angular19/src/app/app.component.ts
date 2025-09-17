import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Panel } from "primeng/panel";
import { PanelBasicDemo } from "./panel/panel.component";
import { IftaLabelBasicDemo } from "./username/username.component";
import { DatePickerBasicDemo } from "./fechanac/fechanac.component";
import { SelectBasicDemo } from "./genero/genero.component";
import { ContainercolComponent } from "./containercol/containercol.component";
import { BreadcrumbBasicDemo } from "./menucito/menucito.component";
import { PasswordLocaleDemo } from "./contra/contra.component";
import { InputTextInvalidDemo } from "./datosper/datosper.component";
import { ButtonBasicDemo } from "./boton/boton.component";
import { PaginatorBasicDemo } from "./paginator/paginator.component";



@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, ButtonModule, PanelBasicDemo, IftaLabelBasicDemo, DatePickerBasicDemo, SelectBasicDemo, ContainercolComponent, BreadcrumbBasicDemo, PasswordLocaleDemo, InputTextInvalidDemo, ButtonBasicDemo, PaginatorBasicDemo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'proyectoAngular';
  constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }
}
