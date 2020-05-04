import { LightningElement, track } from 'lwc';

export default class questionSelector extends LightningElement {
    
    @track countryValue;
    @track regionValue;

    handleData(event){
        this.countryValue = event.detail.country;
        this.regionValue = event.detail.region;
        

    }


}
