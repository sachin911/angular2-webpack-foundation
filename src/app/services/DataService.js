"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.discUrl = "app/resources/data/disclosureData.json";
        this.assetUrl = "app/resources/data/assetData.json";
    }
    DataService.prototype.getIndustryOrderData = function () {
        var _this = this;
        return this.http.get('app/resources/data/industryOrderData.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) {
            _this.result = [];
            console.log("this is the IndustryOrder service");
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);
                _this.result[i] = ({ label: data[i].industry_name, value: data[i] });
            }
            console.log("---Industry dropDown---");
            console.log(_this.result);
            return _this.result;
        });
    };
    DataService.prototype.getIndustryOrderHardData = function () {
        this.result = [];
        this.result.push({ label: 'None', value: 'None' });
        this.result.push({ label: 'Technology', value: { industry_id: 1, industry_name: 'Technology', industry_order_id: 1, sort_order: 1 } });
        this.result.push({ label: 'HealthCare', value: { industry_id: 2, industry_name: 'HealthCare', industry_order_id: 2, sort_order: 2 } });
        return this.result;
    };
    DataService.prototype.getDisclosureData = function () {
        var _this = this;
        return this.http.get(this.discUrl)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) {
            _this.result = [];
            console.log("this is the Disclosure service");
            for (var i = 0; i < data.length; i++) {
                _this.result[i] = ({ label: data[i].type, value: data[i] });
            }
            console.log("---Disclosure dropDown---");
            console.log(_this.result);
            return _this.result;
        });
    };
    DataService.prototype.getDisclosureHardData = function () {
        this.result = [];
        this.result.push({ label: 'None', value: 'None' });
        this.result.push({ label: 'ASC820 Disclosure', value: { d_id: 1, type: 'ASC820 Disclosure' } });
        this.result.push({ label: 'ASC2011_4 Disclosure', value: { d_id: 2, type: 'ASC2011_4 Disclosure' } });
        return this.result;
    };
    DataService.prototype.getClientData = function () {
        var _this = this;
        return this.http.get('app/resources/data/clientData.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) {
            _this.result = [];
            console.log("this is the Client service");
            for (var i = 0; i < data.length; i++) {
                _this.result[i] = ({ label: data[i].name, value: data[i] });
            }
            console.log("---Client dropDown---");
            console.log(_this.result);
            return _this.result;
        });
    };
    DataService.prototype.getClientHardData = function () {
        this.result = [];
        this.result.push({ label: 'None', value: 'None' });
        this.result.push({ label: 'OZ', value: { c_id: 1, name: 'QZ' } });
        this.result.push({ label: 'AQR', value: { c_id: 2, name: 'AQR' } });
        return this.result;
    };
    DataService.prototype.getAssetClassificationData = function () {
        var _this = this;
        return this.http.get(this.assetUrl)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) {
            _this.result = [];
            console.log("this is the Asset service");
            for (var i = 0; i < data.length; i++) {
                _this.result[i] = ({ label: data[i].name, value: data[i] });
            }
            console.log("---Assets dropDown---");
            console.log(_this.result);
            return _this.result;
        });
    };
    /*getAssetObservable() : Observable<SelectItem[]>{
        return this.http.get(this.assetUrl)
                .map()
    }*/
    DataService.prototype.getAssetClassificationHardData = function () {
        this.result = [];
        this.result.push({ label: 'None', value: 'None' });
        this.result.push({ label: 'Common Stock, Limited partnership', value: { asset_id: 1, name: 'Common Stock, Limited partnership', order: 1 } });
        this.result.push({ label: 'Total Return Swap', value: { asset_id: 2, name: 'Total Return Swap', order: 2 } });
        this.result.push({ label: 'Asset Swap', value: { asset_id: 3, name: 'Asset Swap', order: 2 } });
        this.result.push({ label: 'Bank Debt', value: { asset_id: 4, name: 'Bank Debt', order: 1 } });
        return this.result;
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=DataService.js.map