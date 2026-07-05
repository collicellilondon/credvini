'use client'; import {X} from 'lucide-react';
export function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:React.ReactNode}){return <div className="overlay" onMouseDown={onClose}><div className="modal" onMouseDown={e=>e.stopPropagation()}><div className="modalHead"><h2>{title}</h2><button onClick={onClose}><X/></button></div>{children}</div></div>}
