import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  SaveData(product:Product)
  {
    return this.http.post('http://localhost:1010/insertData',product);
  }
  getData()
  {
    return this.http.get('http://localhost:1010/getAllData');
  }
  deleteData(id:number)
  {
    return this.http.delete('http://localhost:1010/delete/'+id);
  }
  editData(product:Product)
  {
    return this.http.put('http://localhost:1010/editData/',product.id);
  }
}
