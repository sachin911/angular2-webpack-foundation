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
var AssetClassificationService = (function () {
    function AssetClassificationService(http) {
        this.http = http;
        this.assetUrl = "app/resources/data/assetData.json";
    }
    AssetClassificationService.prototype.getAssetClassificationData = function () {
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
    AssetClassificationService.prototype.getAssetClassificationHardData = function () {
        this.result = [];
        this.result.push({ label: 'None', value: 'None' });
        this.result.push({ label: 'Common Stock, Limited partnership', value: { asset_id: 1, name: 'Common Stock, Limited partnership', order: 1 } });
        this.result.push({ label: 'Total Return Swap', value: { asset_id: 2, name: 'Total Return Swap', order: 2 } });
        this.result.push({ label: 'Asset Swap', value: { asset_id: 3, name: 'Asset Swap', order: 2 } });
        this.result.push({ label: 'Bank Debt', value: { asset_id: 4, name: 'Bank Debt', order: 1 } });
        return this.result;
    };
    AssetClassificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AssetClassificationService);
    return AssetClassificationService;
}());
exports.AssetClassificationService = AssetClassificationService;
//# sourceMappingURL=AssetClassificationService.js.map