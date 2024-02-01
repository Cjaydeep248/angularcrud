import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit{

  constructor(private hs:ProductServiceService,private route:Router){}
  product:Product[];
  ngOnInit(): void {
    this.hs.getData().subscribe((data:Product[])=>{
      this.product=data;
    })
  }
  onDelete(id:number)
  {
    this.hs.deleteData(id).subscribe();
    window.location.reload
  }
  onEdit(product:Product)
  {
    this.route.navigateByUrl('edit/'+JSON.stringify(product))
  }

}
