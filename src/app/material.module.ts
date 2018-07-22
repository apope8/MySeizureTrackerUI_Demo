import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,

} from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
    ]
})

export class MaterialModule { }