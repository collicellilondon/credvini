'use client';
import { useEffect } from 'react';
import { X } from 'lucide-react';
export function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:React.ReactNode}){
  useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose()};document.addEventListener('keydown',close);document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',close);document.body.style.overflow=''}},[onClose]);
  return <div className="overlay" onMouseDown={onClose}><div className="modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={e=>e.stopPropagation()}><div className="modalHead"><h2>{title}</h2><button type="button" aria-label="Fechar" onClick={onClose}><X/></button></div>{children}</div></div>
}
