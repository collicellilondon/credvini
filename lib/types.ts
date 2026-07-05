export type Risk = 'Bom pagador' | 'Atenção' | 'Mau pagador';
export type LoanStatus = 'Ativo' | 'Quitado' | 'Atrasado' | 'Cancelado';
export type InstallmentStatus = 'Pendente' | 'Pago' | 'Atrasado';

export type Client = {
  id: number; name: string; phone: string; email?: string; document?: string;
  address?: string; notes?: string; risk: Risk; history: string[]; createdAt: string;
};
export type Loan = {
  id: number; clientId: number; principal: number; installmentCount: number; installmentValue: number;
  startDate: string; firstDueDate: string; frequency: 'Mensal' | 'Semanal'; total: number;
  totalInterest: number; status: LoanStatus; notes?: string; createdAt: string;
};
export type Installment = {
  id: number; loanId: number; clientId: number; number: number; amount: number;
  dueDate: string; status: InstallmentStatus; paidAmount: number; paidAt?: string;
};
export type Payment = {
  id: number; loanId: number; installmentId: number; clientId: number;
  amount: number; date: string; method: string; notes?: string;
};
export type Theme = 'jade' | 'navy' | 'graphite';
export type Settings = { ownerName: string; businessName: string; phone: string; theme: Theme };
export type AppData = { version: 3; clients: Client[]; loans: Loan[]; installments: Installment[]; payments: Payment[]; settings: Settings };
