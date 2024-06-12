import { Component, Input, OnInit } from '@angular/core';
import { DeductionService } from '../../services/deduction.service';
import { ResultsForm } from '../../models/resultsForm.interface';

@Component({
  selector: 'app-template-results',
  standalone: true,
  imports: [],
  templateUrl: './template-results.component.html',
  styleUrl: './template-results.component.scss'
})
export class TemplateResultsComponent implements OnInit {
  @Input() nameForm: string = '';

  public resultsForm: ResultsForm = {
    resultDeduction: 0,
    resultRangeSalaries: 0,
  }

  constructor(private deductionService: DeductionService) { }

  ngOnInit(): void {
    this.showData();
  }

  public showData() {
    this.resultsForm = this.deductionService.getResultsForm();
  }

  public reset() {
    location.reload();
  }
}
