import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-basic-demo',
    templateUrl: './boton.component.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonBasicDemo { }