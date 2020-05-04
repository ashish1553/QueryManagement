import { LightningElement, track, wire } from 'lwc';
import getQueryList from '@salesforce/apex/questionController.getQueryList';
const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Question', fieldName: 'Question__c' },
    { label: 'Country', fieldName: 'Country__c' },
    { label: 'Region', fieldName: 'Region__c' }
];

export default class BasicDatatable extends LightningElement {
    @track data = [];
    @track columns = columns;

    @wire(getQueryList)
    queries;
}
