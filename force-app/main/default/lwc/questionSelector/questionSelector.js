import { LightningElement, track } from 'lwc';
import searchQueries from '@salesforce/apex/questionController.searchQueries';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Question', fieldName: 'Question__c' },
    { label: 'Country', fieldName: 'Country__c' },
    { label: 'Region', fieldName: 'Region__c' }
];

export default class questionSelector extends LightningElement {
    
    @track countryValue;
    @track regionValue;
    @track data = [];
    @track columns = columns;
    @track values;
    
    handleData(event){
        this.countryValue = event.detail.country;
        this.regionValue = event.detail.region;
        
        searchQueries({"regionKey": this.regionValue}).then(result => { 
            this.values = result;
            this.error = undefined;
            console.log('result');
            console.log(result);
            
            
        })
        .catch(error => { 
            this.values = undefined;
            this.error = error;
            console.log('error');
            
        })
        console.log('hell');

    }




}
