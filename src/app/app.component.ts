import { Component } from '@angular/core';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { TemplateResultsComponent } from './components/template-results/template-results.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemplateFormComponent, TemplateResultsComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-i18n';
  seletedLanguage = 'es';

  public showResults: boolean = false;
  public nameForm: string = "";

  constructor(private translateService: TranslateService) { }

  onLanguageChange() {
    this.translateService.use(this.seletedLanguage)
  }

  public changeLanguage() {
    this.seletedLanguage = this.seletedLanguage === "es" ? "en" : "es";
    this.onLanguageChange();
  }

  public changeShowResults(result: boolean): void {
    this.showResults = result;
  }

  public getName(name: string) {
    this.nameForm = name;
  }

}
