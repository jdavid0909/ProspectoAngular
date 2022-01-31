import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';
import {ProspectoServiceService} from '../service/prospecto-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

  public prospecto:FormGroup;
  public prospectos:any;
  public formModal:FormGroup;
  public prospectoVar:any;
  public prospectoForm;
  public prospectoBusquedad = [
    {id:1,descripcion:"Id"},
    {id:2,descripcion:"Nombre"},
  ];  
  constructor(
    private service: ProspectoServiceService
  ) { }

  ngOnInit() {

    this.prospecto = new FormGroup({

      'prospecto': new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        
      ]),
      'descripcion': new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        
      ])

    });
    this.formModal = new FormGroup({

      'nombre': new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        
      ]),
      'age': new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        
      ]),
      'email': new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.email
        
      ]),
      
      'estado': new FormControl(null, [
        Validators.required,
        
        
      ]),
      
      'id': new FormControl(null, [
        Validators.required,
        
        
      ])

    });
    this.prospectoVar = {
      prospecto: "",
      descripcion:""
    }
    this.prospectoForm = {
      nombre:'',
      age:'',
      email:'',
      status:'',
      id:''
    }
      
  }

  Buscar(uris){
   
      this.service.Get('/'+uris.descripcion)
        .subscribe(
          data => {
           // this.foundBooks = data.json();
            this.prospectos = data;
            console.log(this.prospectos);
            
            //this.foundBooks = Array.of(this.foundBooks); 
           // this.prospectos = Array.of(this.prospectos);
            
            if (data.status == 200) {
              
              console.log("si");
              
  
            } else if (data.status == 404) {
              // this.toastr.warning(data.message, 'Advertencia!');
            } else {
              // this.toastr.error(data.message, 'Error!');
            }
            
          },
          Error => {
            if (Error.status == 401) {
   
            } else {
              // this.toastr.error('Ocurrio un error con el servicio', 'Error!');
            }
          }
        );
  }
  hide(): void {
    this.modal.hide();
    this.ngOnInit();
  }
  Edit(item) {
    this.modal.show();

  }
  guardar(item){
    let body;
    
      body = JSON.stringify({
        prospectoName: "rodriguez",
        prospectoAge: 23,
        prospectoMail: "josuedde@gmail.com",
        prospectoId: "007",
        prospectoStatus: 1
      });
    console.log(body);
    


    this.service.Send(body, 1)
      .subscribe(
        data => {
          console.log(data);
          
          if (data.status == 200) {
            //swal("Exito", data.message, "success");
          
          } else if (data.status == 404) {
            //swal("Advertencia!", data.message, "warning");
          
            console.log("error 404");
          } else if (data.status == 406) {
            // swal("Advertencia!", data.message, "warning");
          
            console.log("error 406");

          } else {
            //swal("Error!", data.message, "error");
         
            console.log("error else");
          }
        },
        Error => {

          if (Error.status == 401) {

            console.log("error 401");
          } else {
            //swal("Error!", "Ocurrio un error!", "error");
            
          }
        }
      );
  
    this.ngOnInit();
    this.hide();
  }

}
