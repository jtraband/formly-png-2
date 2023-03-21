import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormConfig } from './formly-configs/form-config';

@Component({
    selector: 'dynamic-form',
    styleUrls: ['./dynamic-form.component.scss'],
    templateUrl: './dynamic-form.component.html',
})
export class FormComponent implements OnInit {
    @Input()
    public formConfig?: FormConfig;

    @Output()
    public submitted = new EventEmitter<any>();

    @Output()
    public forgotten = new EventEmitter<any>();


    formGroup: FormGroup = new FormGroup({});

    fieldConfigs: FormlyFieldConfig[] = [];
    

    constructor() {
        
    }

    ngOnInit(): void {
        this.fieldConfigs = this.formConfig!.fieldConfigs;
        
    }

    submit() {
        this.submitted.emit(this.formConfig!.model);
    }

    
}