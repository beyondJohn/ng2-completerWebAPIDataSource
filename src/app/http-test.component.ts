import { Component } from '@angular/core';
import { HTTPTestService } from './services/http-test.service';

@Component({
	selector: 'http-test',
	templateUrl:'/http-test.component.html',
	providers: [HTTPTestService]
})
export class HTTPTestComponent{

	getData: string;
	postData: string;

	constructor(private _httpService: HTTPTestService){}

	onTestGet(){
		this._httpService.get(
			'http://www.zipcodeapi.com/rest/js-MACIH6hyelOnNtMmNkD3iJdpbQkWkbe7MRPuY72ctRAgkmD8GhcY1pocgI9BToIG/info.json/07750/radians'
		).subscribe(data => this.getData = JSON.stringify(data),error => alert(error),() => console.log("Finished"));
	}
	onTestPost(){
		this._httpService.postJSON(
			'http://validate.jsontest.com',
			{var1: 'test', var2: 2},
			{'Content-Type': 'application/x-www-form-urlencoded'}
		).subscribe(data => this.postData = JSON.stringify(data),error => alert(error),() => console.log("Finished"));
	}
}