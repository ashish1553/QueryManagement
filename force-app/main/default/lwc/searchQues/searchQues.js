import { LightningElement, api } from 'lwc';

export default class ComboboxBasic extends LightningElement {
    @api countryValue
    @api regionValue

    get countryOptions() {
        return [
            { label: 'India', value: 'India' },
            { label: 'China', value: 'China' },
            { label: 'America', value: 'America' },
            { label: 'South Africa', value: 'South Africa' },
            { label: 'Russia', value: 'Russia' },
            { label: 'France', value: 'France' }
        ];
    }

    handleChangeCountry(event) {
        this.countryValue = event.detail.value;
    }

            india = [
                {label: "Delhi", value: "Delhi"},
                {label: "Banglore", value: "Banglore"},
                {label: "Kolkata", value: "Kolkata"},
            ]
            china = [
                {label: "Hubei", value: "Hubei"},
                {label: "Beijing", value: "Beijing"},
                {label: "Shanghai", value: "Shanghai"},
            ]
            america = [
                {label: "California", value: "California"},
                {label: "LA", value: "LA"},
                {label: "Texas", value: "Texas"},
            ]
            africa = [
                {label: "Western Cape", value: "Western Cape"},
                {label: "Eastern Cape", value: "Eastern Cape"},
                {label: "Northern Cape", value: "Northern Cape"},
            ]
            russia = [
                {label: "Adygey", value: "Adygey"},
                {label: "Altai", value: "Altai"},
                {label: "Bashkortostan", value: "Bashkortostan"},
            ]
            france = [
                {label: "Auvergne-Rhone-Alpes", value: "Auvergne-Rhone-Alpes"},
                {label: "Corsica", value: "Corsica"},
                {label: "Normandy", value: "Normandy"},
            ]

    get regionOptions() {
        if (this.countryValue == 'India'){
            return this.india;
        }
        else if (this.countryValue == 'China'){
            return this.china;
        }
        else if (this.countryValue == 'America'){
            return this.america;
        }
        else if (this.countryValue == 'South Africa'){
            return this.africa;
        }
        else if (this.countryValue == 'Russia'){
            return this.russia;
        }
        else if (this.countryValue == 'France'){
            return this.france;
        }
        
    }

    handleChangeRegion(event) {
        this.regionValue = event.detail.value;
    }

    handleClick(event){
        event.preventDefault();
        const passValue = new CustomEvent('search', {
            detail : {country:this.countryValue, region:this.regionValue}
            });
        this.dispatchEvent(passValue);   

    }

}
