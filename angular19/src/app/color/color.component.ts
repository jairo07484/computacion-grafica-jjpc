import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-basic-demo',
    templateUrl: './color.component.html',
    standalone: true,
    imports: [FormsModule, ColorPicker]
})
export class ColorPickerBasicDemo {
    color: string | undefined;
}