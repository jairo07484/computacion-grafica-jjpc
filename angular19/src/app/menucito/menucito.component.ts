import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
    selector: 'breadcrumb-basic-demo',
    templateUrl: './menucito.component.html',
    standalone: true,
    imports: [Breadcrumb]
})
export class BreadcrumbBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Principal' },
            { label: 'Practicas' },
            { label: 'Ayuda' },
            { label: 'Más' },
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }
}