import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'datepicker-basic-demo',
    templateUrl: './fechanac.component.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerBasicDemo {
    date: Date | undefined;
}