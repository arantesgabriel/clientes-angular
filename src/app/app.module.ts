import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ControlComponent } from './views/control/control.component';
import { TableModule } from 'primeng/table';
import { ClienteService } from './views/service/cliente.service';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    HttpClientModule,
    RouterModule,
    TableModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ClienteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
