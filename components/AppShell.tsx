'use client';
import { useEffect, useState } from 'react';
import { Bell, ChartNoAxesCombined, FileText, HardDrive, Info, Landmark, LayoutDashboard, LogOut, Menu, Settings, Users, WalletCards, X } from 'lucide-react';
import { Logo } from './Logo';

const nav = [
  ['dashboard','Visão geral',LayoutDashboard],['clients','Clientes',Users],['loans','Empréstimos',Landmark],
  ['payments','Pagamentos',WalletCards],['alerts','Alertas',Bell],['statements','Extratos',FileText],
  ['reports','Relatórios',ChartNoAxesCombined],['about','Sobre o Sistema',Info],
] as const;

export default function AppShell({active,children,title,subtitle,action,alertCount=0}:{active:string;children:React.ReactNode;title:string;subtitle:string;action?:React.ReactNode;alertCount?:number}) {
  const [open,setOpen]=useState(false);
  useEffect(()=>{ if(!localStorage.getItem('cv_session')) location.href='/'; },[]);
  return <div className="app">
    <aside className={open?'open':''}>
      <div className="sideTop"><Logo/><button aria-label="Fechar menu" className="close" onClick={()=>setOpen(false)}><X/></button></div>
      <span className="navLabel">GESTÃO</span>
      <nav>{nav.map(([id,label,Icon])=><a key={id} className={active===id?'active':''} href={id==='dashboard'?'/dashboard':'/dashboard?view='+id}><Icon/>{label}{id==='alerts'&&alertCount>0&&<b>{alertCount}</b>}</a>)}</nav>
      <div className="sideBottom">
        <a className={active==='settings'?'active':''} href="/dashboard?view=settings"><Settings/>Configurações</a>
        <button onClick={()=>{localStorage.removeItem('cv_session');location.href='/'}}><LogOut/>Sair da conta</button>
        <div className="user"><span>VS</span><div><b>Vinicius Silva</b><small>Administrador local</small></div></div>
      </div>
    </aside>
    <section className="content"><header><button aria-label="Abrir menu" className="hamb" onClick={()=>setOpen(true)}><Menu/></button><div className="localStatus"><HardDrive/><span><b>Operação local</b><small>Dados salvos neste navegador</small></span></div><div className="headRight"><a className="notification" aria-label="Abrir alertas" href="/dashboard?view=alerts"><Bell/>{alertCount>0&&<i/>}</a><span className="avatar">VS</span></div></header><main><div className="pageTitle"><div><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>{children}</main></section>
  </div>;
}
