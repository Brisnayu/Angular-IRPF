import { Component } from '@angular/core';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { TemplateResultsComponent } from './components/template-results/template-results.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemplateFormComponent, TemplateResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public showResults:boolean = false;
  public nameForm:string = "";

  public changeShowResults(result: boolean): void {
    this.showResults = result;
  }

  public getName(name: string) { 
    this.nameForm = name;
  }
  
}
