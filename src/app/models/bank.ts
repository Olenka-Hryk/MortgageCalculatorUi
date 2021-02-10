export interface IBank {
  _id: string;
  name: string;
  interestRate: number;
  maximumLoan: number;
  minimumDownPayment: number;
  loanTerm: number;
}
