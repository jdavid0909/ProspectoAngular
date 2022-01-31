import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prospectoRoutingModule } from './prospectoRouting.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [
    CommonModule,
    prospectoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    HttpModule,
    ModalModule.forRoot(),
  ],
  declarations: [HomeComponent]
})
export class ProspectoModule { }
