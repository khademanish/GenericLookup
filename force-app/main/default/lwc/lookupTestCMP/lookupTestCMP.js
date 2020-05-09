import { LightningElement, track } from 'lwc';

export default class LookupTestCMP extends LightningElement {
    @track recordName;

    handleSelectedRecord(event){
        var receivedData = event.detail;
        this.recordName = receivedData.Name;
    }
}