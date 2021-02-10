import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IBank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html',
  styleUrls: ['./update-bank.component.scss'],
})
export class UpdateBankComponent implements OnInit {
  id: string = '';
  public bank: Partial<IBank> = {
    name: '',
    interestRate: 0,
    maximumLoan: 0,
    minimumDownPayment: 0,
    loanTerm: 0,
  };

  public submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bankService: BankService
  ) {}

  public ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bankService.getBankById(this.id).subscribe((data) => {
      console.log(data);
      this.bank = data;
    });
  }

  public updateBank() {
    this.bankService.updateBank(this.id, this.bank).subscribe((data) => {
      console.log(data);
      this.goBack();
    });
  }

  public onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.updateBank();
  }

  public goBack() {
    this.router.navigate(['banks']);
  }
}
