import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-locale-demo',
    templateUrl: './contra.component.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordLocaleDemo {
    value!: string;
}