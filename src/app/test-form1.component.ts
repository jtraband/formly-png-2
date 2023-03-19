import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { TestForm1Config, TestForm1Model } from './formly-configs/test-form1-config';
import { FormConfig } from './formly-configs/form-config';

@Component({
    selector: 'test-form1',
    styleUrls: ['./test-form1.component.scss'],
    templateUrl: './test-form1.component.html',
})
export class TestForm1Component implements OnInit {
    // loginForm: FormGroup;
    showPassword = false;
    formConfig: FormConfig;
    model: TestForm1Model;

    constructor(
        private title: Title,
    ) {
        this.formConfig = new TestForm1Config();
        this.model = this.formConfig.model;
    }

    ngOnInit() {
        this.title.setTitle('Test Form 1');

        
    }

    submit(formModel: TestForm1Model) {
        console.log('Successfully logged in');
    }

}