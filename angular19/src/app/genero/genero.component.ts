import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-basic-demo',
    templateUrl: './genero.component.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectBasicDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'Masculino', code: 'NY' },
            { name: 'Femenino', code: 'RM' },
            { name: 'Otro', code: 'LDN' },
        ];
    }
}