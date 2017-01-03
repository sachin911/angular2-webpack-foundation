import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from '../../services/DataService';
import {SelectItem} from 'primeng/primeng';

@Component({
	templateUrl : 'disclosure.component.html',
	selector : 'my-disclosure'
})


export class DisclosureComponent implements OnInit {
	discs : SelectItem[];
	clients : SelectItem[];
	assets : SelectItem[];
	industry : SelectItem[];
	selectedDisclosure : string;
	constructor(private dataService : DataService) {}

	ngOnInit() {
		this.discs = [];
		this.clients = [];
		//this.selectedDisclosure = "Please select the Disclosure";
		console.log("hello reached init");

		this.discs = this.dataService.getDisclosureHardData();

		// this.dataService.getDisclosureData()
		// 	.then(discs => this.discs = discs);

		// this.dataService.getClientData()
		// 	.then(clients => this.clients = clients);
		//
		// this.dataService.getAssetClassificationData()
		// 	.then(assets => this.assets = assets);
		//
		// this.dataService.getIndustryOrderData()
		// 	.then(industry => this.industry = industry);

	}

}
