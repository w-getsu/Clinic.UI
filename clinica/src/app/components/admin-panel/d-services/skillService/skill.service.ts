import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { SkillModel } from '../../d-inters/skill-model';
import { map, Observable } from 'rxjs';
import { getModel } from '../../d-inters/get-model';
import { responseModel } from '../../../../interfaces/responce';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiurl = `${environment.apiUrl}Skills`
  constructor(private http: HttpClient) { }

  getAll(data:getModel) : Observable<SkillModel[]> {
    return this.http.get<SkillModel[]>(`${this.apiurl}?pageIndex=${data.pageIndex}&size=${data.size}`);
  }
  delByid(id:string) : Observable<responseModel>{
    return this.http.delete<responseModel>(`${this.apiurl}/DeleteSkill/` + id).pipe(
      map((response)=>{
        if(response.isSuccess){
          alert("Deleted");
        }
        return response;
      }));
  }
}
