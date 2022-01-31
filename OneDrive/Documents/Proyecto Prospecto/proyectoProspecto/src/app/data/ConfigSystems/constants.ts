import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

 public uriServer = "http://localhost:9090";
 public uriServerRecursos = "http://18.189.227.171:8080/";

 public ServerLocal = this.uriServer + '/api/v1/prospectos';
 
}











