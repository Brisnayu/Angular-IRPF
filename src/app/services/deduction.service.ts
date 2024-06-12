import { Injectable } from '@angular/core';
import { salaryRange } from '../diccionary/salaryRange';
import { ResultsForm } from '../models/resultsForm.interface';
import { DataDeduction } from '../models/dataDeduction.interface';

@Injectable({
  providedIn: 'root'
})
export class DeductionService {

  private resultsForm: ResultsForm = {
    resultDeduction: 0,
    resultRangeSalaries: 0,
  }

  public deduction(data: DataDeduction) {
    let result: number = 0;
    let porcentaje: number = 0;
    for (const range of salaryRange) {
      if (data.salary <= range.max) {
        result = (data.individualPension + data.companyPension + data.selfEmployedPension) * range.valor;
        console.log('Te corresponde una retención del ', range.valor * 100, "%");
        console.log('Tienes una deducción de ', result, '€');
        porcentaje = range.valor * 100;
        break;
      }
    }

    this.resultsForm = { resultDeduction: result, resultRangeSalaries: porcentaje}
  }

  public getResultsForm() {
    return this.resultsForm;
  }
}
