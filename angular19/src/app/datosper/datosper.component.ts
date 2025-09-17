import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-invalid-demo',
    templateUrl: './datosper.component.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextInvalidDemo {
    value1: string | undefined;

    value2: string | undefined;
}