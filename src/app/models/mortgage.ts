import { IBank } from './bank';

export interface IMortgage {
  _id: string;
  bank: IBank | string;
  initialLoan: number;
  downPayment: number;
  monthlyMortgagePayment: number;
}
