import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// import {SelectItem} from 'primeng/api';
// import {SelectItemGroup} from 'primeng/api';


import { FormConfig } from './formly-configs/form-config';
import { TestForm1Config, TestForm1Model } from './formly-configs/test-form1-config';

import { TestForm2Config } from './formly-configs/test-form2-config';
import { TestForm3Config, TestForm3Model } from './formly-configs/test-form3-config';

interface ConfigItem {
    name: string,
    code: string
}

@Component({
    selector: 'test-form1',
    styleUrls: ['./test-form1.component.scss'],
    templateUrl: './test-form1.component.html',
})
export class TestForm1Component implements OnInit {
    formConfig: FormConfig | null;
    configItems: ConfigItem[];
    selectedConfigCode: string; 

    constructor(
        private title: Title,
    ) {

        this.configItems = [
            {name: 'Test 1', code: 'T1'},
            {name: 'Test 2', code: 'T2'},
            {name: 'Test 3', code: 'T3'},
        ];

        this.formConfig = null;
        this.selectedConfigCode = 'T1';
        this.selectForm('T1');
    }

    ngOnInit() {
        this.title.setTitle('Test Form 1');
        
    }

    
    

    onChange(event: any) {
        console.log('event :' + event);
        console.log(event.value);
        // nulling formConfig removes the dynamic form
        this.formConfig = null;
        setTimeout( () => {
            // selectForm recreates formConfig which recreates the dynamic form.
            this.selectForm(event.value);
        } );
        
    }

    selectForm(formCode: string) {
        
        switch ( formCode ) {
            case 'T1' :
                this.formConfig = new TestForm1Config();
                break;
            case 'T2':
                this.formConfig = new TestForm2Config();
                break;
            case 'T3':
                this.formConfig = new TestForm3Config();
                break;                
            default: 
                // 
                break;
         }
    }

    submit(formModel: TestForm1Model) {
        console.log('Successfully logged in');
        console.log(this.formConfig!.model);
        alert(JSON.stringify(this.formConfig!.model));
    }

}