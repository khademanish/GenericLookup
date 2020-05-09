public with sharing class GenericLookup {
    

    @AuraEnabled
    public static List<SObject> getRecords(String searchString, String fields, 
                                            String searchField, String objectName){
        String queryString = 'SELECT Id,'+fields+' FROM '+objectName+' WHERE '+searchField+' LIKE \''+searchString+'%\'';
        return (List<sObject>)Database.query(queryString);
    }
}