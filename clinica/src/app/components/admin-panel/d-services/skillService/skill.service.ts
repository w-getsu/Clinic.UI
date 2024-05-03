import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SkillService {


  apiurl = `${environment.apiUrl}Skills/`
  constructor(private http: HttpClient) { }

  
}
