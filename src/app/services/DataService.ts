import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {IndustryOrder} from '../model/industryOrder/IndustryOrder';
import {Disclosure} from '../model/Disclosure/Disclosure';
import {Client} from '../model/client/Client';
import {AssetClassification} from '../model/assetClassification/AssetClassification';
import {SelectItem} from 'primeng/primeng';

@Injectable()
export class DataService {
	private discUrl = "../resources/data/disclosureData.json";
	private assetUrl = "app/resources/data/assetData.json";

	result : SelectItem[];
	constructor( private http : Http) {

	}

	getIndustryOrderData(){
		return this.http.get('app/resources/data/industryOrderData.json')
						.toPromise()
						.then(res => <IndustryOrder[]> res.json().data)
						.then(data => {
							this.result = [];
							console.log("this is the IndustryOrder service");
							for(var i=0; i< data.length; i++){
								console.log(data[i]);
								this.result[i]=({label:data[i].industry_name, value:data[i]});
							}
							console.log("---Industry dropDown---");
							console.log(this.result);
							return this.result;
						});
	}

	getIndustryOrderHardData(){
		this.result = [];
		this.result.push({label : 'None' , value : 'None' });
		this.result.push({label: 'Technology', value: {industry_id : 1, industry_name: 'Technology', industry_order_id : 1, sort_order: 1}});
		this.result.push({label: 'HealthCare', value: {industry_id : 2, industry_name: 'HealthCare', industry_order_id : 2, sort_order: 2}});
		return this.result;
	}

	getDisclosureData(){
		return this.http.get(this.discUrl)
						.toPromise()
						.then(res => <Disclosure[]> res.json().data)
						.then(data => {
							this.result = [];
							console.log("this is the Disclosure service");
							for(var i=0; i< data.length; i++){
								this.result[i]=({label:data[i].type, value:data[i]});
							}
							console.log("---Disclosure dropDown---");
							console.log(this.result);
							return this.result;});
	}


	getDisclosureHardData(){
		this.result = [];
		this.result.push({label : 'None' , value : 'None' });
		this.result.push({label: 'ASC820 Disclosure', value: {d_id : 1, type: 'ASC820 Disclosure'}});
		this.result.push({label: 'ASC2011_4 Disclosure', value: {d_id : 2, type: 'ASC2011_4 Disclosure'}});
		return this.result;
	}


	getClientData(){
		return this.http.get('app/resources/data/clientData.json')
						.toPromise()
						.then(res => <Client[]> res.json().data)
						.then(data => {
							this.result = [];
							console.log("this is the Client service");
							for(var i=0; i< data.length; i++){
								this.result[i]=({label:data[i].name, value:data[i]});
							}
							console.log("---Client dropDown---");
							console.log(this.result);
							return this.result;});
	}

	getClientHardData(){
		this.result = [];
		this.result.push({label : 'None' , value : 'None' });
		this.result.push({label: 'OZ', value: {c_id : 1, name: 'QZ'}});
		this.result.push({label: 'AQR', value: {c_id : 2, name: 'AQR'}});
		return this.result;
	}

	getAssetClassificationData(){
		return this.http.get(this.assetUrl)
						.toPromise()
						.then(res => <AssetClassification[]> res.json().data)
						.then(data => {
							this.result = [];
							console.log("this is the Asset service");
							for(var i=0; i< data.length; i++){
								this.result[i]=({label:data[i].name, value:data[i]});
							}
							console.log("---Assets dropDown---");
							console.log(this.result);
							return this.result;
						});
	}


	/*getAssetObservable() : Observable<SelectItem[]>{
		return this.http.get(this.assetUrl)
				.map()
	}*/

	getAssetClassificationHardData(){
		this.result = [];
		this.result.push({label : 'None' , value : 'None' });
		this.result.push({label: 'Common Stock, Limited partnership', value: {asset_id : 1, name: 'Common Stock, Limited partnership', order : 1}});
		this.result.push({label: 'Total Return Swap', value: {asset_id : 2, name: 'Total Return Swap', order : 2}});
		this.result.push({label: 'Asset Swap', value: {asset_id : 3, name: 'Asset Swap', order : 2}});
		this.result.push({label: 'Bank Debt', value: {asset_id : 4, name: 'Bank Debt', order : 1}});
		return this.result;
	}

}
