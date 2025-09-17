import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'paginator-basic-demo',
    templateUrl: './paginator.component.html',
    standalone: true,
    imports: [PaginatorModule]
})
export class PaginatorBasicDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }
}