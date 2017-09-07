import { Component } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { HTTPTestService } from './services/http-test.service';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  providers: [HTTPTestService]

})
export class LocationComponent {

	getData: string;
	location: string = "my location";
	protected searchStr: string;
  	protected captain: string;
  	protected dataService: CompleterData;
  	protected searchData = [
    		{ color: 'red', value: '#f00' },
    		{ color: 'green', value: '#0f0' },
    		{ color: 'blue', value: '#00f' },
    		{ color: 'cyan', value: '#0ff' },
    		{ color: 'magenta', value: '#f0f' },
    		{ color: 'yellow', value: '#ff0' },
    		{ color: 'black', value: '#000' }
  	];
  	protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];

  	constructor(private completerService: CompleterService, private _httpService: HTTPTestService) {
    		this.dataService = completerService.local(this.searchData, 'color', 'color');
  	}

	protected cities = [];

  	onTestGet(){
		var param = this.getData;
		if(this.getData.length > 3){
			this._httpService.get('http://www.beyondlogical.com/api/Zip?request=' + param)
			.subscribe(data => {
					for (let entry of data) {    
						let city: string = entry;
						let splitted = city.split(",",3); 
						if(this.cities.indexOf(splitted[1] + ", " + splitted[2] + " " + splitted[0].toString()) > -1)
						{}
						else
						{
							this.cities.push(splitted[1] + ", " + splitted[2] + " " + splitted[0].toString());
						}
					//this.getData = splitted[1];	
					}
			},error => alert(error),() => {
			console.log("Finished"); 
			console.log("secondCommand");	
			});
		}
		else{
			this.cities = [];	
		}
    	}
}
