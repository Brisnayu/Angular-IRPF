import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataForm } from '../../models/dataForm.interface';
import { DeductionService } from '../../services/deduction.service';
import { CommonModule } from '@angular/common';
import { DataDeduction } from '../../models/dataDeduction.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {
  @Output() validResult = new EventEmitter<boolean>();
  @Output() showName = new EventEmitter<string>();

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private deductionService: DeductionService) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      individualPension: ['', [Validators.min(0), Validators.max(1500)]],
      companyPension: ['', [Validators.min(0), Validators.max(8500)]],
      selfEmployedPension: ['', [Validators.min(0), Validators.max(5750)]],
    });
  }

  public onSubmit() {
    const formData = this.formGroup.value as DataForm;
    const requestData = this.mapFormDataToRequest(formData);
    this.deductionService.deduction(requestData);

    this.validResult.emit(true);
    this.showName.emit(formData.name);
  }

  private mapFormDataToRequest(formData: DataForm): DataDeduction {
    return {
      salary: formData.salary,
      individualPension: formData.individualPension,
      companyPension: formData.companyPension,
      selfEmployedPension: formData.selfEmployedPension
    };
  }
}
