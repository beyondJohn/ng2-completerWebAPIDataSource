import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';		
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class HTTPTestService {
	constructor(private _http: Http){}

	get(url: string){

		return this._http.get(url).map(res => res.json());//'http://date.jsontest.com'
	}

	postJSON(url: string, jsonObject: object, headersObject: object){
	
		var json = JSON.stringify(jsonObject);
		var params = 'json='+ json;
		var headers = new Headers();

		Object.keys(headersObject).forEach(function eachKey(key) { 
			headers.append(key, headersObject[key]);
  		});

		return this._http.post(url, params,{headers: headers}).map(res => res.json());
	}
}