import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token 115cc283fdccf417ae1e984f18797a548ebbaaf4';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getMember(id): Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders}
    );
  }

  updateMember(member): Observable<any> {
    let body = { name: member.name, secondname: member.secondname,
       phone: member.phone};
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body,
    {headers: this.httpHeaders}
    );
  }

  deleteMember(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders}
    );
  }
}
