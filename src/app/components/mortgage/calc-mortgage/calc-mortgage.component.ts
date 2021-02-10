import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IMortgage } from 'src/app/models/mortgage';
import { MortgageService } from 'src/app/services/mortgage.service';
import { IBank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-calc-mortgage',
  templateUrl: './calc-mortgage.component.html',
  styleUrls: ['./calc-mortgage.component.scss'],
})
export class CalcMortgageComponent implements OnInit {
  public banks: IBank[] = [];
  public payments: IMortgage[] = [];
  public selectedBankId: string | null = null;
  public hasError: boolean = false;
  public mortgage: Partial<IMortgage> = {
    initialLoan: 0,
    downPayment: 0,
    monthlyMortgagePayment: 0,
  };

  public calculated = false;

  constructor(
    private router: Router,
    private mortgageService: MortgageService,
    private bankService: BankService
  ) {}

  public ngOnInit(): void {
    this.fetchBanks();
    this.onOfLoanHistory();
  }

  private fetchBanks(): void {
    this.bankService.getBankList().subscribe((list) => {
      this.banks = list;
    });
  }

  public onCalculate(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.hasError = false;
    const bank = this.banks.find((bank) => bank._id === this.selectedBankId);

    const maxLoan = bank?.maximumLoan ?? 0;
    const initLoan = this.mortgage.initialLoan ?? 0;
    const minDownPayment = bank?.minimumDownPayment ?? 0;
    const downPayment = this.mortgage.downPayment ?? 0;

    if (!this.selectedBankId) {
      return;
    }

    this.mortgage.bank = this.selectedBankId;

    if (initLoan <= maxLoan && downPayment >= minDownPayment) {
      this.calculated = true;
      console.warn(this.mortgage);
      this.mortgageService.createMorgage(this.mortgage).subscribe((result) => {
        this.mortgage.monthlyMortgagePayment = result;
      });
    } else {
      this.hasError = true;
    }
  }

  public goBack(): void {
    this.calculated = false;
    this.router.navigate(['mortgage']);
  }

  public reloadData(): void {
    this.mortgageService.getMortgagePaymentList().subscribe((list) => {
      this.payments = list;
    });
  }

  public onLoanHistory(): void {
    this.router.navigate(['mortgage', 'history']);
  }

  public onOfLoanHistory(): void {
    this.router.navigate(['mortgage']);
  }
}
