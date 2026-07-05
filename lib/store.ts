import type { AppData, Installment, Loan } from './types';

export const STORAGE_KEY='credvini_data_v3';
const iso=(d:Date)=>d.toISOString().slice(0,10);
const nextDue=(date:string,index:number,frequency:Loan['frequency'])=>{const d=new Date(date+'T12:00:00');frequency==='Semanal'?d.setDate(d.getDate()+index*7):d.setMonth(d.getMonth()+index);return iso(d)};
export const loanTotal=(value:number,count:number)=>value*count;
export function createInstallments(loan:Loan):Installment[]{return Array.from({length:loan.installmentCount},(_,i)=>({id:loan.id*100+i+1,loanId:loan.id,clientId:loan.clientId,number:i+1,amount:loan.installmentValue,dueDate:nextDue(loan.firstDueDate,i,loan.frequency),status:'Pendente',paidAmount:0}))}
export function emptyData():AppData{return {version:3,clients:[],loans:[],installments:[],payments:[],settings:{ownerName:'Vinicius Silva',businessName:'CredVini',phone:'',theme:'jade'}}}
export function refreshStatuses(data:AppData){const today=iso(new Date());data.installments.forEach(i=>{if(i.status!=='Pago')i.status=i.dueDate<today?'Atrasado':'Pendente'});data.loans.forEach(l=>{if(l.status==='Cancelado')return;const list=data.installments.filter(i=>i.loanId===l.id);l.status=list.length&&list.every(i=>i.status==='Pago')?'Quitado':list.some(i=>i.status==='Atrasado')?'Atrasado':'Ativo'});data.clients.forEach(c=>{const late=data.installments.filter(i=>i.clientId===c.id&&i.status==='Atrasado').length;if(late>=2)c.risk='Mau pagador';else if(late===1&&c.risk==='Bom pagador')c.risk='Atenção'});return data}
export function loadData():AppData{if(typeof window==='undefined')return emptyData();try{const saved=localStorage.getItem(STORAGE_KEY);if(saved)return refreshStatuses(JSON.parse(saved))}catch{localStorage.removeItem(STORAGE_KEY)}const data=emptyData();localStorage.setItem(STORAGE_KEY,JSON.stringify(data));return data}
export function saveData(data:AppData){refreshStatuses(data);localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
