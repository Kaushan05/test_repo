import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import{ AccordionModule} from 'primeng/accordion'
import { PanelModule} from 'primeng/panel';
import { ButtonModule} from 'primeng/button';
import { RadioButtonModule} from 'primeng/radiobutton';
import { RegisterformComponent } from './registerform/registerform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import{ InputMaskModule }from 'primeng/inputmask'
import { InputTextareaModule } from 'primeng/inputtextarea';
import{DropdownModule} from 'primeng/dropdown' 



@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputMaskModule,
    InputTextareaModule,ReactiveFormsModule,DropdownModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
