import { Pipe, PipeTransform } from '@angular/core';

import { IBank } from '../models/bank';
import { IMortgage } from '../models/mortgage';

@Pipe({
  name: 'bank',
})
export class BankPipe implements PipeTransform {
  transform(value: IMortgage): IBank {
    return value.bank as IBank;
  }
}
