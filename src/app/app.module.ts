import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { TodosService } from './todos.service';
import { HttpClientModule } from '@angular/common/http';
import { UserformComponent } from './userform/userform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { CardviewComponent } from './cardview/cardview.component';
import { TranslationService } from 'angular-l10n';
import { TranslationModule, L10nConfig, ProviderType } from 'angular-l10n';
import { MatCommonModule } from '@angular/material/core';


const l10nConfig: L10nConfig = {
  translation: {
    providers: [
      {
        type: ProviderType.WebAPI,
        path: ''
      }
    ],
    composedKeySeparator: '.',

    i18nPlural: true
  }
};
const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'edit/:id',
    component: UserformComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    CardviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatDialogModule ,
    MatCommonModule,
    TranslationModule.forRoot(l10nConfig),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
