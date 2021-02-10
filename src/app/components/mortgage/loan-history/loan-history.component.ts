import { Component, OnInit } from '@angular/core';

import { IMortgage } from 'src/app/models/mortgage';
import { MortgageService } from 'src/app/services/mortgage.service';

@Component({
  selector: 'app-loan-history',
  templateUrl: './loan-history.component.html',
  styleUrls: ['./loan-history.component.scss'],
})
export class LoanHistoryComponent implements OnInit {
  public mortgages: IMortgage[] = [];
  public mortgage: Partial<IMortgage> = {
    bank: {
      _id: '',
      name: '',
      interestRate: 0,
      maximumLoan: 0,
      minimumDownPayment: 0,
      loanTerm: 0,
    },
    initialLoan: 0,
    downPayment: 0,
    monthlyMortgagePayment: 0,
  };

  constructor(private mortgageService: MortgageService) {}

  public ngOnInit(): void {
    this.mortgageService.getMortgagePaymentList().subscribe((list) => {
      this.mortgages = list;
    });
  }
}
