import { LightningElement, track, api } from 'lwc';
import getRecords from '@salesforce/apex/GenericLookup.getRecords';

export default class GenericLookup extends LightningElement {
    
    @api retrieveFields;
    @api objectName;
    @api searchField;
    @api fieldLabel;
    @track recordsList;
    @track selectedValue;

    handleValueChange(event){
        const searchValue = event.target.value;
        if(searchValue.length > 3){
            getRecords({searchString : searchValue,
                        fields       : this.retrieveFields,
                        searchField  : this.searchField,
                        objectName   : this.objectName})
            .then((result) =>{
                this.recordsList = result;
            })
            .catch((error) => {
                console.log('Error',error);
            });
        }else{
            this.recordsList = null;
        }
    }

    handleSelect(event){
        this.selectedValue = event.detail.Name;
        this.recordsList = null;
        const parentEvent = new CustomEvent("selectrecord",
            {
                detail : event.detail
            }
        );
        this.dispatchEvent(parentEvent);
    }
}