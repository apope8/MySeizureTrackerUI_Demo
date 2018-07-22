import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,

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
        MatCardModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatCardModule
    ]
})

export class MaterialModule { }