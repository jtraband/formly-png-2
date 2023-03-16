import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormConfig } from './formly-configs/form-config';


@Component({
    selector: 'dynamic-form',
    // styleUrls: ['./dynamic-form.component.scss'],
    templateUrl: './dynamic-form.component.html',
})
export class FormComponent implements OnInit {
    @Input()
    public formConfig?: FormConfig;

    @Output()
    public submitted = new EventEmitter<any>();

    @Output()
    public forgotten = new EventEmitter<any>();

    @Output()
    public passwordShown = new EventEmitter<any>();

    formGroup: FormGroup = new FormGroup({});

    fields: FormlyFieldConfig[] = [];

    constructor() {
        // this.formConfig = new FormConfig();
    }

    ngOnInit(): void {
        this.fields = this.formConfig!.fieldConfigs;
        // if (this.formAttributes.formType) {
        //     this.formsService.getForm(this.formAttributes.formType, this.formAttributes.model).subscribe((form: Form) => {
        //         this.fields = form.fields;
        //     });
        //}
    }

    submit() {
        this.submitted.emit(this.formConfig!.model);
    }

    showPassword() {
        const config = this.formConfig!;
        config.model.showPassword = !config.model.showPassword;
        this.passwordShown.emit(config.model);
    }
}