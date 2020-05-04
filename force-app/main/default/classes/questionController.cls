public with sharing class questionController {
    @AuraEnabled(cacheable=true)
    public static List<Query__c> getQueryList() {
        List<Query__c> queryList = [SELECT Name, Question__c, Country__c, Region__c FROM Query__c];
        return queryList;
    }
    @AuraEnabled
    public static List<Query__c> searchQueries(String regionKey) {
        // String cnkey = '%' + countryKey + '%';
        // String rekey = '%' + regionKey + '%';
        return [
            SELECT Name, Question__c, Country__c, Region__c FROM Query__c
            WHERE Region__c =:regionKey
        ];
    }
    // @AuraEnabled(cacheable=true)
    // public static List<Response__c> getAns() {
    //     List<Response__c> ansList = [SELECT Id,Question__c, Ans__c, Comment__c FROM Response__c];
    //     return ansList;
    // }
}
