import { LightningElement, api, track} from 'lwc';
import searchQueries from '@salesforce/apex/questionController.searchQueries';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Question', fieldName: 'Question__c' },
    { label: 'Country', fieldName: 'Country__c' },
    { label: 'Region', fieldName: 'Region__c' }
];

export default class SearchFunctionality extends LightningElement {
    @api countryValue;
    @api regionValue;

    @track data = [];
    @track columns = columns;

    @track values;

    doSearch(){
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
        console.log('hi');
    };

}