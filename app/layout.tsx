import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'CredVini — Gestão Financeira Premium', description: 'Controle profissional de empréstimos, pagamentos e carteira de clientes.', applicationName:'CredVini', appleWebApp:{capable:true,title:'CredVini',statusBarStyle:'black-translucent'}, icons:{icon:'/icon.jpeg',apple:'/apple-icon.jpeg'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html> }
