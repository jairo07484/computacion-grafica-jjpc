import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'panel-basic-demo',
    templateUrl: './panel.component.html',
    standalone: true,
    imports: [PanelModule]
})
export class PanelBasicDemo {}