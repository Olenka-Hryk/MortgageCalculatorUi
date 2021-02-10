import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IBank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss'],
})
export class BankListComponent implements OnInit {
  public banks: IBank[] = [];
  public deleteError: boolean = false;

  constructor(private router: Router, private bankService: BankService) {}

  public ngOnInit(): void {
    this.reloadData();
  }

  public reloadData(): void {
    this.bankService.getBankList().subscribe((list) => {
      this.banks = list;
    });
  }

  public deleteBank(id: string): void {
    this.deleteError = false;

    this.bankService.deleteBank(id).subscribe(
      (bank) => {
        this.banks = this.banks.filter((item) => item._id !== bank._id);
      },
      (err) => {
        this.deleteError = true;
      }
    );
  }

  public bankDetails(id: string): void {
    this.router.navigate(['banks', 'details', id]);
  }

  public createBank(): void {
    this.router.navigateByUrl('/banks/create');
  }

  public updateBank(id: string): void {
    this.router.navigate(['banks', 'update', id]);
  }

  public onMortgageCalculator(): void {
    this.router.navigate(['mortgage']);
  }
}
