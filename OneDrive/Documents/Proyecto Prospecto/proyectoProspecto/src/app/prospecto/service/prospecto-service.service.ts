import { Injectable } from '@angular/core';
import { BaseRequestOptions, Headers, Http, RequestMethod, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/data/ConfigSystems/constants';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProspectoServiceService {

  constructor(
     private http: Http,
    private _url: Configuration,
    private router: Router

  ) { }

  private apiUrl = 'api/v1/prospectos'
  
  public Get(url) {
   
    return this.http.get(this.apiUrl + url).map((res) => res.json());
  }
  public Send(data, type) {
    let typeService;
    if (type == 1) {
        typeService = RequestMethod.Post;
    } else {
        typeService = RequestMethod.Put;
    }

    return this.http.post(this.apiUrl , data)
        .map(res => res.json());
  }
}
