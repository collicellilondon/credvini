import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'CredVini — Controle financeiro', description: 'Controle. Confiança. Resultados.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html> }
