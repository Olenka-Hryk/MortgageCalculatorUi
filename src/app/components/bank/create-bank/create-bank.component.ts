import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IBank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.scss'],
})
export class CreateBankComponent implements OnInit {
  public bank: Partial<IBank> = {
    name: '',
    interestRate: 0,
    maximumLoan: 0,
    minimumDownPayment: 0,
    loanTerm: 0,
  };

  public submitted = false;

  constructor(private router: Router, private bankService: BankService) {}

  public ngOnInit() {}

  public onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.submitted = true;

    this.bankService.createBank(this.bank).subscribe((data) => {
      this.goBack();
    });
  }

  public goBack() {
    this.router.navigate(['banks']);
  }
}
