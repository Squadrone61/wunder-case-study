import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const imp_exp = [
    CommonModule,
    FormsModule,
    IonicModule,
]

@NgModule({
    imports: [
        imp_exp
    ],
    exports: [
        imp_exp
    ]
})
export class SharedModule { }
