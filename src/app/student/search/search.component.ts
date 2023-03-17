import { Component, OnInit } from '@angular/core';
import { ProductService, Property, PropertyResponse, PropertyResults, SearchRequest } from 'src/service/property/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  propertiesDis: PropertyDisplay[];


  constructor(private productService:ProductService) { 
    this.propertiesDis = [];
  }

  ngOnInit(): void {
    let searchRequest:SearchRequest = {
      userId:null,
      userName:null,
      typeId:null,
      title:null,
      address:null,
      createDatetimeFrom:null,
      createDatetimeTo:null,
      amountFrom:null,
      amountTo:null,
      areaFrom:null,
      areaTo:null,
      offset:null,
      limit:null,
    }
    this.refreshProperty(searchRequest);
  }

  refreshProperty(searchRequest:SearchRequest){
    this.productService.getAll(searchRequest)
    .subscribe(data => {
      this.genProperty(data.results.properties);
    })
  }

  genProperty(property:Property[]){
    for (let index = 0; index < property.length; index++) {
      let propertyDisplay: PropertyDisplay = {
        propertyId : property[index].propertyId,
        typeId : property[index].typeId,
        typeName : property[index].typeName,
        createUserId : property[index].createUserId,
        createUserName : property[index].createUserName,
        createDatetime : property[index].createDatetime,
        lastupDateTime : property[index].lastupDateTime,
        lastupUserId : property[index].lastupUserId,
        lastupUserName : property[index].lastupUserName,
        title : property[index].title,
        address : property[index].address,
        amount : this.xulytien(property[index].amount),
        area : property[index].area,
        description : property[index].description,
        approveStatus : property[index].approveStatus,
        propertyImg : property[index].propertyImg,
      }
      this.propertiesDis.push(propertyDisplay);
    }
  }

  xulytien(num:string) : string{
    const amout = parseInt(num);
    var million = Math.floor(amout/1000000);
    var thousand = amout%1000000/1000;
    return million +' triệu ' + thousand + ' nghìn'
  }

}

export interface PropertyDisplay{
  propertyId: string;
  typeId: string;
  typeName: string;
  createUserId: string;
  createUserName: string;
  createDatetime: string;
  lastupUserId: string;
  lastupUserName: string;
  lastupDateTime: string;
  title: string;
  address: string;
  amount: string;
  area: string;
  description: string;
  approveStatus: string;
  propertyImg: string[];
}
