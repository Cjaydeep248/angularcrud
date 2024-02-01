import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  constructor(private hs:ProductServiceService,private fb:FormBuilder ,private route:ActivatedRoute){}
  product:Product;
  proReg:FormGroup;
ngOnInit(): void {
  
  this.proReg=this.fb.group({
    id:[],
    pName:[],
    pPrice:[],
    availableQuantity:[],
    pColor:[],
    supplier:this.fb.group({
      supplierId:[],
      supplierName:[],
      supplierAddress:[],
      supplierContact:[]
    })
  })
  this.onEditdata();
}
onSaveData()
{
  this.hs.SaveData(this.proReg.value).subscribe();
  alert('saved')
}
onEditdata()
{
  this.route.paramMap.subscribe(
    param=>{
      let productJson=param.get('data');
      let editData=JSON.parse(productJson);
      this.proReg.patchValue(editData);
    }
  )
}
}
