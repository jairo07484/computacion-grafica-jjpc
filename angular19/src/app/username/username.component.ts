import { Component } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ifta-label-basic-demo',
    templateUrl: './username.component.html',
    standalone: true,
    imports: [IftaLabelModule, InputTextModule, FormsModule]
})
export class IftaLabelBasicDemo {
    value: string | undefined;
}