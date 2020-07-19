import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getUserDetails(userName: string) {
    return this.http.get(`https://www.instagram.com/${userName}/?__a=1`)
  }

}
