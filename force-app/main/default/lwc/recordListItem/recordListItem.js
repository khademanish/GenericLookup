import { LightningElement , api} from 'lwc';

export default class RecordListItem extends LightningElement {
    @api recordItem;

    handleSelect(event){
        const selectEvent = new CustomEvent('select',{
            detail : this.recordItem 
        });
        this.dispatchEvent(selectEvent);
    }
}