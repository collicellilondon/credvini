import Image from 'next/image';
export function Logo({compact=false}:{compact?:boolean}){return <div className="logo"><Image className="brandLogo" src="/credvini-logo.jpeg" width={48} height={48} alt="CredVini" priority/>{!compact&&<div><strong>CredVini</strong><small>GESTÃO FINANCEIRA PREMIUM</small></div>}</div>}
