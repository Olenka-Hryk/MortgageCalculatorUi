import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { BankDetailsComponent } from './components/bank/bank-details/bank-details.component';
import { CreateBankComponent } from './components/bank/create-bank/create-bank.component';
import { UpdateBankComponent } from 'src/app/components/bank/update-bank/update-bank.component';
import { CalcMortgageComponent } from 'src/app/components/mortgage/calc-mortgage/calc-mortgage.component';
import { LoanHistoryComponent } from 'src/app/components/mortgage/loan-history/loan-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'banks',
    pathMatch: 'full',
  },
  {
    path: 'banks',
    component: BankListComponent,
  },
  {
    path: 'banks/details/:id',
    component: BankDetailsComponent,
  },
  {
    path: 'banks/create',
    component: CreateBankComponent,
  },
  {
    path: 'banks/update/:id',
    component: UpdateBankComponent,
  },
  {
    path: 'mortgage',
    component: CalcMortgageComponent,
    children: [
      {
        path: 'history',
        component: LoanHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
