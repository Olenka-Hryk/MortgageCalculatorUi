import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BankService } from './services/bank.service';
import { MortgageService } from './services/mortgage.service';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { BankDetailsComponent } from './components/bank/bank-details/bank-details.component';
import { CreateBankComponent } from './components/bank/create-bank/create-bank.component';
import { UpdateBankComponent } from './components/bank/update-bank/update-bank.component';
import { CalcMortgageComponent } from './components/mortgage/calc-mortgage/calc-mortgage.component';
import { LoanHistoryComponent } from './components/mortgage/loan-history/loan-history.component';
import { BankPipe } from './pipes/bank.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BankListComponent,
    BankDetailsComponent,
    CreateBankComponent,
    UpdateBankComponent,
    CalcMortgageComponent,
    LoanHistoryComponent,
    BankPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [BankService, MortgageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
