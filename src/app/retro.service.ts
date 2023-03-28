import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RetroService {
  url= "http://localhost:3000/restaurants"
  rootUrl= "http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getList() {
    console.warn("Some Data..........")
    return this.http.get(this.url);
  }
  saveRetro(data: any) {
    // console.warn("service", data)
    return this.http.post(this.url, data)
  }

  deleteRetro(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getCurrentRetro(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }

  updateRetro(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }

  registerUser(data: any) {
    return this.http.post(this.rootUrl + "users", data)
  }

}
