import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponentComponent } from './demo-component/demo-component.component';

@NgModule( {
    imports: [
        CommonModule, BrowserModule, FormsModule
    ],
    declarations: [DemoComponentComponent],
    bootstrap: [DemoComponentComponent]
} )
export class DemoModule { }
