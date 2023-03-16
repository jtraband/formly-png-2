import { FormlyFieldConfig } from "@ngx-formly/core";

export interface FormConfig {
    fieldConfigs: FormlyFieldConfig[];
    model: any;
    buttonText: string;
}